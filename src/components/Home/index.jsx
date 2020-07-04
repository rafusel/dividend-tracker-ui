import React from 'react';
import styles from './styles.module.css';
import Logo from '../../assets/wealthsimple-pink.png';
import { Redirect } from 'react-router-dom';

export default function Home(props) {
  return !props.isAuthenticated
    ? (
      <div className={styles.homePageWrapper}>
        <div className={styles.white}>
          <h1>
            Dividend Growth Investing Made Easy
          </h1>
        </div>
        <div className={styles.pink}>
          <p>
            Get detailed analytics tracking your dividends across all Wealthsimple Trade accounts.
          </p>
          <p>
            Wealthsimple Trade is a mobile app that provides commission free trading to its users for Canadian stocks.
            For dividend growth investors that want to make every percentage point count, this application provides
            the simplest way to track dividends accurately.
          </p>
          <p>
            Forget using spreadsheets to manually track your dividends. Log in using your Wealthsimple credentials,
            select what account/accounts you would like to see analytics for, and watch your passive income grow.
          </p>
        </div>
        <div className={styles.image}>
          <img src={Logo} alt="Charts" />
        </div>
      </div>
    ) : (
      <Redirect to={'/dashboard'} />
    )
}
