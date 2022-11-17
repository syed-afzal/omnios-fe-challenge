import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getFromLocalStorage } from '../../utils/browser-storage';
import { LOGIN, HOME } from '../../utils/constants';

function PrivateRoute(props) {
  const token = getFromLocalStorage('user');
  if (!token) {
    return <Redirect to={{ pathname: LOGIN }} />;
  }

  if (props.location.pathname === '/') return <Redirect to={{ pathname: HOME }} />;
  return <Route {...props} />;
}

export default PrivateRoute;
