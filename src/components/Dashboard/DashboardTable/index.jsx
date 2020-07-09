import React from 'react';
import styles from './styles.module.css';

export default class DashboardTable extends React.Component {
  sortDividends = () => {
    const sortingToKeyMap = {
      'date': ['process_date', false],
      'date-reverse': ['process_date', true],
      'security': ['symbol', false],
      'security-reverse': ['symbol', true],
      'dividend': ['market_value.amount', false],
      'dividend-reverse': ['market_value.amount', true],
    };

    const key = sortingToKeyMap[this.props.sortBy];

    const compareFunction = (a, b) => {
      if (key[0] !== 'market_value.amount') {
        if (a[key[0]] === b[key[0]]) return 0;
        if (a[key[0]] > b[key[0]]) return 1;
        return -1;
      }
      if (a.market_value.amount === b.market_value.amount) return 0;
      if (a.market_value.amount > b.market_value.amount) return 1;
      return -1;
    }

    const compareFunctionReverse = (a, b) => {
      if (key[0] !== 'market_value.amount') {
        if (a[key[0]] === b[key[0]]) return 0;
        if (a[key[0]] < b[key[0]]) return 1;
        return -1;
      }
      if (a.market_value.amount === b.market_value.amount) return 0;
      if (a.market_value.amount < b.market_value.amount) return 1;
      return -1;
    }

    const cmpFunc = key[1] ? compareFunction : compareFunctionReverse;
    const dividends = this.props.dividends;
    dividends.sort(cmpFunc);
    return dividends;
  }

  render () {
    const sortedDividends = this.sortDividends();
    const rowItems = sortedDividends.map((dividend) => (
      <tr key={dividend.id}>
        <td>{dividend.process_date}</td>
        <td>{dividend.symbol}</td>
        <td>{`$${dividend.market_value.amount.toFixed(2)}`}</td>
      </tr>
    ));
    return (
      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th>
                Date
              </th>
              <th>
                Security
              </th>
              <th>
                Dividend
              </th>
            </tr>
          </thead>
          <tbody>
            {rowItems}
          </tbody>
        </table>
      </div>
    );
  }
}
