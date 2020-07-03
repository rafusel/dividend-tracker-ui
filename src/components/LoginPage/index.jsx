import React from 'react';
import styles from './styles.module.css';
import axios from 'axios'

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginInfo: {
        email: '',
        password: '',
      },
      tokens: {
        access: '',
        refresh: '',
      }
    };
  }

  login = (e) => {
    e.preventDefault();
    axios.post('https://trade-service.wealthsimple.com/auth/login', this.state.loginInfo)
    .then(res => {
      this.setState({
        tokens: {
          access: res.headers['x-access-token'],
          refresh: res.headers['x-refresh-token'],
        }
      })
    }, (error) => {
      console.error(error);
    });
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const loginInfo = this.state.loginInfo;
    loginInfo[name] = value;
    this.setState({
      loginInfo: loginInfo
    });
  }

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
                value={this.state.loginInfo.email}
                onChange={this.handleChange}
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.loginInfo.password}
                onChange={this.handleChange}
              />
              <div className={styles.submitWrapper}>
                <input type="submit" value="Sign In" />
              </div>
          </div>
        </form>
      </div>
    );
  }
}
