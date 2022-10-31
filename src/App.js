import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './router';
import LoadingPage from './components/loadingPage';

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
