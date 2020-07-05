import React from 'react';
import { Redirect } from 'react-router-dom';

export default class Logout extends React.Component {
  render() {
    this.props.logout();
    return <Redirect to="/login" />
  }
}