import React, { lazy, Fragment, useState, useEffect } from 'react';
import { Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { APP, LOGIN, SIGN_UP } from '../utils/constants';

import PublicRoute from '../router/publicRoute';
import PrivateRoute from '../router/privateRoute';
import LoadingPage from '../components/loadingPage';

const history = createBrowserHistory();

function ProtectedRouter() {
  const [isUserLoading, setUserLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUserLoading(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      {isUserLoading ? (
        <LoadingPage />
      ) : (
        <Router history={history}>
          <Switch>
            <PublicRoute path={LOGIN} component={lazy(() => import('../containers/login'))} />
            <PublicRoute path={SIGN_UP} component={lazy(() => import('../containers/signUp'))} />
            <PrivateRoute path={APP} component={lazy(() => import('../containers/home'))} />
          </Switch>
        </Router>
      )}
    </Fragment>
  );
}

export default ProtectedRouter;
