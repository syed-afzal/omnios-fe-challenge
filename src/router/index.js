import React, { lazy, useState, useEffect } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';

import { APP, LOGIN, SIGN_UP } from '../utils/constants';

import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';
import LoadingPage from '../components/loadingPage';

function ProtectedRouter() {
  const [isUserLoading, setUserLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUserLoading(false);
    }, 1000);
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isUserLoading ? (
        <LoadingPage />
      ) : (
        <Router>
          <Switch>
            <PublicRoute path={LOGIN} component={lazy(() => import('../containers/login'))} />
            <PublicRoute path={SIGN_UP} component={lazy(() => import('../containers/signUp'))} />
            <PrivateRoute path={APP} component={lazy(() => import('../containers'))} />
          </Switch>
        </Router>
      )}
    </>
  );
}

export default ProtectedRouter;
