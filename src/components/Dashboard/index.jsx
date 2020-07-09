import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { axiosBaseURL } from '../../redux/axiosHelpers';
import DashboardCard from './DashboardCard/index';
import styles from './styles.module.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalBarSeries,
} from 'react-vis';
import DashboardTable from './DashboardTable/index';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allActivities: [],
      dividendsWithinPastYear: 0,
      totalEquityValue: 0,
      projectedDividend: 0,
      dividends: [],
      viewPort: {
        height: 200,
        width: 200,
      },
      sortBy: 'date',
      crunchDividends: [],
    };
  }

  componentDidMount() {
    if (this.props.isAuthenticated) {
      axios.post(`${axiosBaseURL}/api/v1/activities`, this.props.tokens)
      .then((res) => {
        const activities = res.data.activities;
        this.setState({
          allActivities: activities,
          dividendsWithinPastYear: this.getDividendIncome(activities),
        })
      });

      axios.post(`${axiosBaseURL}/api/v1/accounts`, this.props.tokens)
      .then((res) => {
        const accounts = res.data.results;
        accounts.forEach(this.sendHistoryRequest);
      });

      axios.post(`${axiosBaseURL}/api/v1/positions`, this.props.tokens)
      .then(res => {
        const positions = res.data.results;
        positions.forEach(this.projectDividend)
      });

      window.addEventListener('resize', this.resizeDashboardGraph);
      this.resizeDashboardGraph();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeDashboardGraph);
  }

  resizeDashboardGraph = () => {
    const width = window.innerWidth > 1300 ? 1300 : window.innerWidth;
    const height = window.innerHeight > 1.5 * width ? 1.5 * width
      : window.innerHeight;
    const viewPort = {
      height: height - 100,
      width: width - 100,
    };
    this.setState({ viewPort });
  }

  projectDividend = (position) => {
    const ticker = position.stock.symbol.replace('.', '-');
    const numberOfShares = position.quantity;
    axios.post(`${axiosBaseURL}/api/v1/yield`, { ticker })
    .then(res => {
      const currentDividendValue = res.data.dividend * numberOfShares;
      const totalProjectedDividend = this.state.projectedDividend;
      this.setState({
        projectedDividend: currentDividendValue + totalProjectedDividend,
      });
    });
  }

  parseDate = (givenDateAsString) => {
    const year = parseInt(givenDateAsString.substring(0, 4));
    const month = parseInt(givenDateAsString.substring(5, 7));
    const day = parseInt(givenDateAsString.substring(8, 10));
    return {
      day,
      month,
      year,
    };
  }

  isDateWithinPastYear = (givenDate) => {
    const todayDate = new Date();
    const today = {
      year: todayDate.getFullYear(),
      month: todayDate.getMonth() + 1,
      day: todayDate.getDate(),
    };
    if (today.year > givenDate.year) return true;
    if (today.year === givenDate.year) {
      if (today.month > givenDate.month) return true;
      if (today.month === givenDate.month) {
        if (today.day >= givenDate.day) return true;
      }
    }
    return false
  };

  getDividendIncome = (activities) => {
    const dividendsWithinPastYear = activities.filter((activity) => (
      activity.object === 'dividend'
        && this.isDateWithinPastYear(this.parseDate(activity.process_date))
    ));
    const sumDividends = dividendsWithinPastYear.reduce((total, dividend) => (
      total + dividend.market_value.amount
    ), 0);

    this.setState({
      dividends: dividendsWithinPastYear,
      crunchDividends: this.crunchDividends(dividendsWithinPastYear),
    });
    return sumDividends;
  }

  sendHistoryRequest = (account) => {
    axios.post(`${axiosBaseURL}/api/v1/history`, {
      tokens: this.props.tokens,
      accountID: account.id,
    }).then((res) => {
      const results = res.data.results;
      const currentEquityValue = results[results.length - 1].equity_value.amount;
      const totalEquityValue = this.state.totalEquityValue;
      this.setState({
        totalEquityValue: currentEquityValue + totalEquityValue,
      });
    });
  }

  crunchDividends = (dividends) => {
    let dividendGraphData = {};
    dividends.forEach((dividend) => {
      if (dividendGraphData[dividend.process_date]) {
        dividendGraphData[dividend.process_date] = dividendGraphData[dividend.process_date] + dividend.market_value.amount;
      } else {
        dividendGraphData[dividend.process_date] = dividend.market_value.amount;
      }
    });
    let data = [];
    Object.keys(dividendGraphData).forEach((date) => {
      const parsedDate = this.parseDate(date);
      const x = new Date(parsedDate.year, parsedDate.month - 1, parsedDate.day).getTime();
      const y = dividendGraphData[date];
      data.push({ x, y });
    });

    return data;
  }

  changeSortBy = (e) => {
    this.setState({ sortBy: e.target.value });
  }

  render() {
    const {
      dividendsWithinPastYear,
      projectedDividend,
      totalEquityValue,
      crunchDividends,
    } = this.state
    const estimatedYield = (projectedDividend / totalEquityValue) * 100;


    return (
      this.props.isAuthenticated ? (
        <div>
          <div className={styles.dashboardWrapper}>
            <h1>
              Welcome, {this.props.userName}
            </h1>
            <div className={styles.dashboardCards}>
              <DashboardCard
                label="Dividend Income in the Past Year"
                value={`$${dividendsWithinPastYear.toFixed(2)}`}
              />
              <DashboardCard
                label="Estimated Current Yearly Dividend Income"
                value={`$${projectedDividend.toFixed(2)}`}
              />
              <DashboardCard
                label="Estimated Current Dividend Yield"
                value={`${estimatedYield.toFixed(2)}%`}
              />
            </div>
            <h1>
              Your payouts over the last year
            </h1>
            <div className={styles.dividendGraph}>
              <XYPlot
                xType="time"
                width={this.state.viewPort.width}
                height={this.state.viewPort.height}
                margin={{bottom: 75}}
                animation={{duration: 1000}}
              >
                <HorizontalGridLines />
                <XAxis
                  tickLabelAngle={-60}
                  title="Date"
                />
                <YAxis
                  title="Dividend Amount"
                />
                <VerticalBarSeries
                  data={crunchDividends}
                  color='#cf698e'
                  animation={{duration: 1000}}
                />
              </XYPlot>
            </div>
            <div>
              <div className={styles.sortingAndFiltering}>
                <label>Sort by:</label>
                <select
                  value={this.state.sortBy}
                  onChange={this.changeSortBy}
                  name="sorting"
                >
                  <option value="date">
                    Date
                  </option>
                  <option value="date-reverse">
                    Date - Reverse
                  </option>
                  <option value="security-reverse">
                    Security
                  </option>
                  <option value="security">
                    Security - Reverse
                  </option>
                  <option value="dividend">
                    Dividend
                  </option>
                  <option value="dividend-reverse">
                    Dividend - Reverse
                  </option>
                </select>
              </div>
              <DashboardTable
                dividends={this.state.dividends}
                sortBy={this.state.sortBy}
              />
            </div>
          </div>
        </div>
      ) : (
        <Redirect to='/login' />
      )
    );
  }

}
