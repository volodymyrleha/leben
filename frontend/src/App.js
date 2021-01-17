import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginLayout from './components/LoginLayout/LoginLayout';
import UserHomeLayout from './components/UserHomeLayout/UserHomeLayout';

import './App.scss';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LoginLayout} />
      <Route exact path="/home" component={UserHomeLayout} />
    </Switch>
  );
}

export default App;
