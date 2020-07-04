import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalDividends: 0,
    };
  }

  componentDidMount() {
    if (this.props.isAuthenticated) {
      axios.post('http://localhost:5000/api/v1/dividends', this.props.tokens)
      .then((res) => {
        const activities = res.data.dividends;
        const justDividends = activities.filter((activity) => (
          activity.object === 'dividend'
        ));
        const totalDividends = justDividends.reduce((total, dividend) => (
          total + dividend.market_value.amount
        ), 0);
        this.setState({
          totalDividends: totalDividends,
        })
      });
    }
  }

  render() {
    return (
      this.props.isAuthenticated ? (
        <div>
          You're authenticated. You have ${this.state.totalDividends} of total dividends.
        </div>
      ) : (
        <Redirect to='/login' />
      )
    );
  }

}
