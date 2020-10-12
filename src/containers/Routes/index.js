import React from 'react'
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage';


const Routes = (props) => {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    );
  };
  export default Routes;