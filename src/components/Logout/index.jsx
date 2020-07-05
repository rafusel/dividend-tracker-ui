import React from 'react';
import { Redirect } from 'react-router-dom';

export default class Logout extends React.Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    return <Redirect to="/login" />
  }
}