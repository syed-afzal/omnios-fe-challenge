import React, { Fragment, Suspense, lazy } from 'react';
import { Layout } from 'antd';
import { Switch } from 'react-router-dom';

import Header from '../components/header';
import LoadingPage from '../components/loadingPage';
import PrivateRoute from '../router/privateRoute';
import { APP, GALLERY } from '../utils/constants';

import './styles.scss';

const { Content } = Layout;

function MainContainer() {
  return (
    <Fragment>
      <Header />
      <Layout>
        <Content className="content">
          <Suspense fallback={LoadingPage}>
            <Switch>
              <PrivateRoute path={APP} component={lazy(() => import('./home'))} />
              <PrivateRoute path={GALLERY} component={lazy(() => import('./gallery'))} />
            </Switch>
          </Suspense>
        </Content>
      </Layout>
    </Fragment>
  );
}

export default MainContainer;
