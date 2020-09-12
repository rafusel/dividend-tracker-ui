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
import Logout from '../Logout/index';
import '../../../node_modules/react-vis/dist/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isAuthenticated: false,
      tokens: {
        access: '',
        refresh: '',
        demoMode: false,
      },
      firstName: '',
    }
  }

  componentDidMount() {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';
    const accessToken = sessionStorage.getItem('accessToken');
    const refreshToken = sessionStorage.getItem('refreshToken');
    const firstName = sessionStorage.getItem('firstName');
    const demoMode = sessionStorage.getItem('demoMode');
    if (isAuthenticated && accessToken && refreshToken && firstName) {
      this.setState({
        isAuthenticated,
        tokens: {
          access: accessToken,
          refresh: refreshToken,
        },
        firstName,
        demoMode: demoMode === 'true',
      });
    }
    this.setState({ isLoaded: true });
  }

  setAuthentication = (tokens, firstName) => {
    this.setState({
      isAuthenticated: true,
      tokens,
      firstName,
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
        demoMode: false,
      },
      firstName: '',
    });
  }

  setDemoModeValue = (value) => {
    let tokens = this.state.tokens;
    tokens.demoMode = value;
    this.setState({ tokens });
  }

  render() {
    return (
      <Router basename="/dividend-tracker-ui">
        <NavBar
          isAuthenticated={this.state.isAuthenticated}
        />
        <Switch>
          <Route path="/login">
            <LoginPage
              isAuthenticated={this.state.isAuthenticated}
              setAuthentication={this.setAuthentication}
              setDemoModeValue={this.setDemoModeValue}
              demoMode={this.state.tokens.demoMode}
            />
          </Route>
          <Route path="/dashboard">
            <Dashboard
              isAuthenticated={this.state.isAuthenticated}
              tokens={this.state.tokens}
              userName={this.state.firstName}
            />
          </Route>
          <Route path="/logout">
            <Logout
              logout={this.logout}
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
