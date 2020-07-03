import React from 'react';
import { connect } from 'react-redux';
import { setDividends } from '../../redux/actions';
import { getTotalDividends } from '../../redux/selectors'; 
import { fetchDividends } from '../../redux/axiosHelpers';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../Home/index';
import './index.css';
import LoginPage from '../LoginPage/index';
import NavBar from '../NavBar/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetchDividends(this.props.setDividendsInStore);
    this.setState({ isLoaded: true });
  }

  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <Home />
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
