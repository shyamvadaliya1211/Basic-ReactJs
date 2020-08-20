import React from "react";
import {Route, Switch } from "react-router-dom";
import App from './components/home/App';
import login from './components/login/login';
import register from './components/register/register';
// your components
const routes = (
    <Switch>
        <Route path="/" component={App} exact/>
        <Route path="/login" component={login}/>
        <Route path="/register" component={register}/>
    </Switch>
);

export default routes;

