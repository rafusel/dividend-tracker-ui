import React from 'react'; 
import styles from './styles.module.css';

export default function LoginPage(props) {
  return (
    <div className={styles.fullPage}>
      <h1>Log In</h1>
      <p>Please use your Wealthsimple Trade credentials.</p>
      <form className={styles.loginForm}>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
      </form>
    </div>
  );
}
