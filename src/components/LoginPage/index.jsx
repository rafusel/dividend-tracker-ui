import React from 'react';
import styles from './styles.module.css';
import axios from 'axios'

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  login = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/v1/login', this.state)
    .then(res => {
      console.log(res);
      window.location.href = '/dividends';
    }, (error) => {
      console.error(error);
    });
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
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
                onChange={this.handleChange}
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
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
