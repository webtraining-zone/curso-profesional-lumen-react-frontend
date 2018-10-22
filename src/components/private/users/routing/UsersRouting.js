import React from 'react';
import {Switch, Route} from 'react-router-dom';
import UsersIndex from '../UsersIndex';

const UsersRouting = () => (
    <Switch>
      <div className="b-content container">
        <Route exact path='/users' component={UsersIndex}/>
      </div>
    </Switch>
);

export default UsersRouting;
