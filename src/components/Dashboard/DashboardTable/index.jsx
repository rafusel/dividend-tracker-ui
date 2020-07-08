import React from 'react';
import styles from './styles.module.css';
import BlackTriangle from '../../../assets/blackTriangle.png';

export default class DashboardTable extends React.Component {
  render () {
    const rowItems = this.props.data.map((dividend) => (
      <tr key={dividend.id}>
        <td>{dividend.process_date}</td>
        <td>{dividend.symbol}</td>
        <td>{`$${dividend.market_value.amount.toFixed(2)}`}</td>
      </tr>
    ));
    return (
      <div className={styles.tableWrapper}>
        <table>
          <tr>
            <th>
              Date
            </th>
            <th>
              Security
              <button onClick={() => { this.props.sortDividends('symbol') }}>
                Sort
              </button>
            </th>
            <th>
              Dividend

            </th>
          </tr>
          {rowItems}
        </table>
      </div>
    );
  }
}
