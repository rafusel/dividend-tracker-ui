import React from 'react';
import { connect } from 'react-redux';
import { setDividends } from '../../redux/actions';
import { getTotalDividends } from '../../redux/selectors';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../Home/index';
import './index.css';
import LoginPage from '../LoginPage/index';
import NavBar from '../NavBar/index';
import Dashboard from '../Dashboard/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isAuthenticated: false,
      tokens: {
        access: '',
        refresh: '',
      }
    }
  }

  componentDidMount() {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';
    const accessToken = sessionStorage.getItem('accessToken');
    const refreshToken = sessionStorage.getItem('refreshToken');
    if (isAuthenticated && accessToken && refreshToken) {
      this.setState({
        isAuthenticated: isAuthenticated,
        tokens: {
          access: accessToken,
          refresh: refreshToken,
        }
      });
    }
    this.setState({ isLoaded: true });
  }

  setAuthentication = (tokens) => {
    this.setState({
      isAuthenticated: true,
      tokens: tokens,
    });
  }

  logout = () => {
    sessionStorage.clear();
    this.setState({
      isLoaded: false,
      isAuthenticated: false,
      tokens: {
        access: '',
        refresh: '',
      }
    });
  }

  render() {
    return (
      <Router basename="/dividend-tracker-ui/">
        <NavBar
          isAuthenticated={this.state.isAuthenticated}
          logout={this.logout}
        />
        <Switch>
          <Route path="/login">
            <LoginPage
              isAuthenticated={this.state.isAuthenticated}
              setAuthentication={this.setAuthentication}
            />
          </Route>
          <Route path="/dashboard">
            <Dashboard
              isAuthenticated={this.state.isAuthenticated}
              tokens={this.state.tokens}
            />
          </Route>
          <Route exact path="/">
            <Home
              isAuthenticated={this.state.isAuthenticated}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  totalDividends: getTotalDividends(state),
});

const mapActionsToProps = (dispatch) => {
  return {
    setDividendsInStore: dividends => {
      dispatch(setDividends(dividends));
    },
  };
};

export default connect(mapStateToProps, mapActionsToProps)(App);
