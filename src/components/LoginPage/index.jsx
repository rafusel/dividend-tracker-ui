import React from 'react';
import styles from './styles.module.css';
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import { axiosBaseURL } from '../../redux/axiosHelpers';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginInfo: {
        email: '',
        password: '',
      },
    };
  }

  login = (e) => {
    e.preventDefault();
    axios.post(`${axiosBaseURL}/api/v1/login`, this.state.loginInfo)
    .then(res => {
      const { tokens, userData } = res.data;
      this.props.setAuthentication(tokens, userData.first_name);
      sessionStorage.setItem('isAuthenticated', 'true');
      sessionStorage.setItem('accessToken', tokens.access);
      sessionStorage.setItem('refreshToken', tokens.refresh);
      sessionStorage.setItem('firstName', userData.first_name);
    }, (error) => {
      alert('Login unsuccessful');
      const loginInfo = this.state.loginInfo;
      loginInfo.password = '';
      this.setState({
        loginInfo: loginInfo,
      });
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
    if (!this.props.isAuthenticated) {
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
    return <Redirect to='/dashboard' />;
  }
}
