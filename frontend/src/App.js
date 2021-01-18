import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginLayout from './components/LoginLayout/LoginLayout';
import WorkspaceLayout from './components/WorkspaceLayout/WorkspaceLayout';

import './App.scss';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LoginLayout} />
      <Route exact path="/workspace" component={WorkspaceLayout} />
    </Switch>
  );
}

export default App;
