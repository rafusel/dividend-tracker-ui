import React from 'react';
import styles from './styles.module.css';

export default function DashboardTable(props) {
  const rowItems = props.data.map((dividend) => (
    <tr>
      <td>{dividend.process_date}</td>
      <td>{dividend.symbol}</td>
      <td>{`$${dividend.market_value.amount.toFixed(2)}`}</td>
      <td>{'$0.00'}</td>
      <td>{`0.00%`}</td>
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
          </th>
          <th>
            Total Dividend
          </th>
          <th>
            Dividend/Share
          </th>
          <th>
            Yield
          </th>
        </tr>
        {rowItems}
      </table>
    </div>
  )
}
