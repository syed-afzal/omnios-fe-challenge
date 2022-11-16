import React, { Fragment, Suspense, lazy } from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';

import Header from '../components/header';
import LoadingPage from '../components/loadingPage';
import PrivateRoute from '../router/privateRoute';
import {GALLERY, APP, HOME, LOGIN} from '../utils/constants';

import './styles.scss';
import PublicRoute from "../router/publicRoute";

const { Content } = Layout

function MainContainer() {
  return (
    <Fragment>
      <Header />
      <Layout>
        <Content className="content">
          <Suspense fallback={<LoadingPage />}>
            <Switch>
              <PrivateRoute exact path={HOME} component={lazy(() => import('./home'))} />
              <PrivateRoute exact path={GALLERY} component={lazy(() => import('./gallery'))} />
              <Route component={() => <div>Not Found Component</div>} />
            </Switch>
          </Suspense>
        </Content>
      </Layout>
    </Fragment>
  );
}

export default MainContainer;
