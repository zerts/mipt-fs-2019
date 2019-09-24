import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import App2 from "./App";
import {ToDoList} from "./views/todo";
import {STRUCTURE} from "./constants";

const MainRouter = () => (
    <Switch>
        <Route exact path='/' component={App2}/>
        <Route path={STRUCTURE.todo.route} component={ToDoList}/>
    </Switch>
);

export default withRouter(MainRouter);