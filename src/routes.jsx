import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import App from "./App";

const MainRouter = () => (
    <Switch>
        <Route exact path='/' component={App}/>

    </Switch>
);

export default withRouter(MainRouter);