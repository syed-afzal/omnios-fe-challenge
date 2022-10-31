import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getFromLocalStorage } from '../../utils/browser-storage';
import { LOGIN } from '../../utils/constants';

function PrivateRoute(props) {
  const token = getFromLocalStorage('user');
  if (!token) {
    return <Redirect to={{ pathname: LOGIN }} />;
  }
  return <Route {...props} />;
}

export default PrivateRoute;
