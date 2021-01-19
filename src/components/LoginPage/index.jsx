import React from 'react';
import styles from './styles.module.css';
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import { axiosBaseURL } from '../../redux/axiosHelpers';
import Spinner from '../../assets/spinner.gif';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginInfo: {
        email: '',
        password: '',
        otp: '',
      },
      disabled: false,
      showOtpField: false,
    };
  }

  login = (e) => {
    e.preventDefault();
    this.setState({ disabled: true });
    axios.post(`${axiosBaseURL}/api/v1/login`, {
      ...this.state.loginInfo,
      demoMode: this.props.demoMode,
    })
    .then(res => {
      const { tokens, userData } = res.data;
      this.props.setAuthentication({ ...tokens, demoMode: this.props.demoMode }, userData.first_name);
      sessionStorage.setItem('isAuthenticated', 'true');
      sessionStorage.setItem('accessToken', tokens.access);
      sessionStorage.setItem('refreshToken', tokens.refresh);
      sessionStorage.setItem('firstName', userData.first_name);
      sessionStorage.setItem('demoMode', this.props.demoMode.toString());
    }, (error) => {
      const loginInfo = this.state.loginInfo;
      this.setState({
        loginInfo: loginInfo,
        disabled: false,
        showOtpField: true,
      });
    });
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const loginInfo = this.state.loginInfo;
    if (name === 'demoMode') this.props.setDemoModeValue(e.target.checked);
    else loginInfo[name] = value;
    this.setState({
      loginInfo: loginInfo
    });
  }

  disableInput = () => this.state.disabled || this.props.demoMode ? styles.disabled : '';

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
                disabled={this.state.disabled || this.props.demoMode}
                className={this.disableInput()}
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.loginInfo.password}
                onChange={this.handleChange}
                disabled={this.state.disabled || this.props.demoMode}
                className={this.disableInput()}
              />
              {
                this.state.showOtpField && (
                  <React.Fragment>
                    <br />
                    <p>
                      Check your email for your one time password.
                    </p>
                    <br />
                    <input
                      type="password"
                      name="otp"
                      value={this.state.loginInfo.otp}
                      onChange={this.handleChange}
                      disabled={this.state.disabled || this.props.demoMode}
                      className={this.disableInput()}
                    />
                  </React.Fragment>
                )
              }
              <p>Don't have a WS Trade account?</p>
              <p>Check this box and click <b>Sign In</b> to view the site in demo mode</p>
              <input
                type="checkbox"
                name="demoMode"
                onChange={this.handleChange}
              />
              <div className={styles.submitWrapper}>
                {
                  this.state.disabled
                  ? (
                    <img src={Spinner} alt="A loading spinner." />
                  ) : (
                    <input
                      type="submit"
                      value="Sign In"
                      disabled={this.state.disabled}
                    />
                  )
                }
              </div>
            </div>
          </form>
        </div>
      );
    }
    return <Redirect to='/dashboard' />;
  }
}
