import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules';

import { default as ContentStyles } from './Content.module.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import { StoreContext } from '../../store/StoreProvider';
import Courses from '../Courses/Courses';

const style = bemCssModules(ContentStyles);

const ADMI_TYPE = 1;

const Content = () => {
  const { user } = useContext(StoreContext);

  const isUserLogged = Boolean(user);
  const isAdmin = user?.accessLevel === ADMI_TYPE;

  return (
    <main className={style()}>
      <Switch>
        <Route exact path="/" render={() => <Courses />} />
        {isUserLogged && <Route exact path="/my-courses" render={() => <p>Moje kursy</p>} />}
        {isAdmin && <Route exact path="/manage-courses" render={() => <p>Zarządzanie kursami</p>} />}
        <Redirect to="/" />
      </Switch>
    </main>
  );
};

export default Content;