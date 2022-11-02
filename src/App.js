import React, { Suspense } from 'react';

import Router from './router';
import LoadingPage from './components/loadingPage';

import './App.scss';

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Router />
    </Suspense>
  );
}

export default App;
