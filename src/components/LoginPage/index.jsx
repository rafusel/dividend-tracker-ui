import React from 'react';
import styles from './styles.module.css';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  login = (e) => {

  }

  setEmail = (e) => {this.setState({ email: e.target.value })}

  setPassword = (e) => {this.setState({ password: e.target.value })}

  render() {
    return (
      <div className={styles.fullPage}>
        <h1>Log In</h1>
        <p>Please use your Wealthsimple Trade credentials.</p>
        <form className={styles.loginForm} onSubmit={this.login}>
          <div className={styles.formContent}>
            <input
                type="email"
                name="email"
                placeholder="Email address"
                onChange={this.setUsername}
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.setPassword}
              />
              <div className={styles.submitWrapper}>
                <input type="submit" value="Submit" />
              </div>
          </div>
        </form>
      </div>
    );
  }
}
