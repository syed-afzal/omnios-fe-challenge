import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from '../src/router';
import LoadingPage from '../src/components/loadingPage';

import './App.scss';

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
