import React from 'react';

import { Route, Router } from 'react-router-dom';
import Homepage from './Homepage';
import history from '../utils/history';

function App() {
  return (
    <Router history ={history}>
      <Route path="/" component={Homepage} />
    </Router>
  );
}

export default App;
