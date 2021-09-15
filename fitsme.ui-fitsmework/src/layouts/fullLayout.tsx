import React, {useState, useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {ThemeRoutes} from '../routes';
import {Topbar, Header, Footer, Loader} from '../components';
function FullLayout() {
  return (
    <>
      <Topbar />
      <Header />
      <Switch>
        {ThemeRoutes.map((prop, key) => {
          if (prop.redirect) {
            return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
          } else {
            return <Route path={prop.path} component={prop.component} key={key} />;
          }
        })}
      </Switch>
      <Footer />
    </>
  );
}

export default FullLayout;
