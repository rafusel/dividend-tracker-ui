import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { axiosBaseURL } from '../../redux/axiosHelpers';
import DashboardCard from './DashboardCard/index';
import styles from './styles.module.css';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allActivities: [],
      dividendsWithinPastYear: 0,
      totalEquityValue: 0,
      projectedDividend: 0,
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
    }
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

  render() {
    const {
      dividendsWithinPastYear,
      projectedDividend,
      totalEquityValue,
    } = this.state
    const estimatedYield = (projectedDividend / totalEquityValue) * 100;
    return (
      this.props.isAuthenticated ? (
        <div className={styles.dashboardWrapper}>
          <h1>
            Welcome to your dashboard, {this.props.userName}
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
        </div>
      ) : (
        <Redirect to='/login' />
      )
    );
  }

}
