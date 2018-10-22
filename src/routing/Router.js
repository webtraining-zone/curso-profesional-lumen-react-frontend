import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PrivateHomeIndex from '../components/private/home/PrivateHomeIndex';
import UsersRouting from '../components/private/users/routing/UsersRouting';
import Header from '../components/private/common/header/Header';
import ProjectsRouting
  from '../components/private/projects/routing/ProjectsRouting';
import LoginComponent from '../components/public/login/LoginComponent';
import PrivateRoute from './PrivateRoute';
import PublicHomeIndex from '../components/public/home/PublicHomeIndex';

const Router = () => {
  return (
      <BrowserRouter>
        <div>
          <Header/>

          <Switch>
            <Route exact path="/" component={PublicHomeIndex}/>
            <Route path="/login" component={LoginComponent}/>
            <PrivateRoute path="/home" component={PrivateHomeIndex}/>
            <PrivateRoute path="/users" component={UsersRouting}/>
            <PrivateRoute path="/projects" component={ProjectsRouting}/>
          </Switch>

        </div>
      </BrowserRouter>
  );
};

export default Router;
