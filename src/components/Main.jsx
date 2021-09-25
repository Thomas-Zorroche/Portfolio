import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ProjectsPage } from '../pages/ProjectsPage';
import { ProfilePage } from '../pages/ProfilePage';


export const Main = () => {

  return (
    
      <Switch> {/* The Switch decides which component to show based on the current URL.*/}

        <Route exact path='/' component={ProjectsPage}></Route>

        <Route exact path='/profile' component={ProfilePage}></Route>

      </Switch>
    
  );
}
