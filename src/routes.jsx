import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import App from "./App";
import {STRUCTURE} from "./constants";
import {ToDoList} from "./views/todo";

const MainRouter = () => (
    <Switch>
        <Route exact path='/' component={App}/>
        <Route path={STRUCTURE.todo.route} component={ToDoList}/>
    </Switch>
);

export default withRouter(MainRouter);