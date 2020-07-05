import React from 'react';
import styles from './styles.module.css';

export default function DashboardCard(props) {
  return (
    <div className={styles.dashboardCard}>
      <h1>
        {props.label}
      </h1>
      <p>
        {props.value}
      </p>
    </div>
  );
}
