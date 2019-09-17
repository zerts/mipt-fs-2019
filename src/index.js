import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Header} from "./components/header";
import MainRouter from './routes';

const render = () => ReactDOM.render(
    <BrowserRouter>
        <div>
            <Header/>
            <MainRouter/>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
