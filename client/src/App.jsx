import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Test from './containers/Test';
import Home from './containers/home/Home';
import { HOME, TEST_PAGE } from './config/routes'

const App = (props) => (
  <div className="App">
    <Switch>
      <Route exact path={HOME} component={Home} />
      <Route exact path={TEST_PAGE} component={Test}/>
    </Switch>
  </div>
);

export default connect()(App);
