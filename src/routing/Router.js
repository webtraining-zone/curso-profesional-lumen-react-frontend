import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PrivateHomeIndex from '../components/private/home/PrivateHomeIndex';
import UsersRouting from '../components/private/users/routing/UsersRouting';
import Header from '../components/private/common/header/Header';
import ProjectsRouting from '../components/private/projects/routing/ProjectsRouting';

const Router = () => {
  return (
      <BrowserRouter>
        <div>
          <Header/>
          <div className="b-content container">
            <Switch>
              <Route exact path="/" component={PrivateHomeIndex}/>
              <Route path="/users" component={UsersRouting}/>
              <Route path="/projects" component={ProjectsRouting}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
  );
};

export default Router;
