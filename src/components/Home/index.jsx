import React from 'react';
import styles from './styles.module.css';
import { Redirect, Link } from 'react-router-dom';

export default function Home(props) {
  return !props.isAuthenticated
    ? (
      <div className={styles.fullPage}>
        <div className={styles.title}>
          <h1>
            A Wealthsimple Trade Dividend Tracker
          </h1>
          <p>
            Keep scrolling for more details
          </p>
        </div>
        <div className={styles.fullPage}>
          <h2>
            Tired of using a spreadsheet to track your portfolio?
          </h2>
          <p>
            If you've ever tried making a spreadsheet to track your portfolio and its dividends
            using Google Sheets or Excel, you're probably aware it can be unmaintainable and unreliable.
          </p>
          <p>
            Wealthsimple Trade users are often attracted to the platform for the
            $0 commission on trades, and the user-friendly interface. Users are
            willing to accept that the analytics provided by the platform (particularly
            for dividend growth investors) are lacking.
          </p>
          <Link to="/login">
            Stop Using Spreadsheets Now
          </Link>
          <h2>
            An automatic dividend tracker
          </h2>
          <p>
            By logging in with your Wealthsimple credentials you will have access to automatic dividend tracking
            on all your holdings. You will have access to metrics such as dividend income over time, estimated
            dividend yield for your entire portfolio, and for each individual holding.
          </p>
          <p>
            In addition to dividend analytics, this tracker provides annual analytics tracking your portfolios
            average interest year over year, so you can be sure that your investments are performing as expected.
          </p>
          <Link to="/login">
            Start Tracking Now
          </Link>
          <h2>
            Fully mobile and desktop compatible
          </h2>
          <p>
            Besides the lack of dividend analytics, one of the few drawbacks of Wealthsimple Trade is its lack of desktop
            compatibility. This application is fully available through any web browser, and is fully responsive for a
            fluid mobile and desktop experience.
          </p>
          <p>
            If you were so inclined, this dividend tracker could serve a your one stop shop for portfolio tracking.
          </p>
          <Link to="/login">
            Log In
          </Link>
        </div>
      </div>
    ) : (
      <Redirect to='/dashboard' />
    )
}
