import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {getFromLocalStorage} from '../../utils/browser-storage'
import {APP} from '../../utils/constants'

function PublicRoute(props) {
  const token = getFromLocalStorage('user');
  if (token) {
    return <Redirect to={{pathname: APP}}/>;
  }
  return <Route {...props} />;
}

export default React.memo(PublicRoute);
