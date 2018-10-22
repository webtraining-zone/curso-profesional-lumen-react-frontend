import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ProjectsIndex from '../ProjectsIndex';

const ProjectsRouting = () => (
    <Switch>
      <div className="b-content container">
        <Route exact path='/projects' component={ProjectsIndex}/>
      </div>
    </Switch>
);

export default ProjectsRouting;
