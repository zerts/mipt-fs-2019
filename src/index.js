import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Header} from "./components/header";
import MainRouter from './routes';
import {Provider} from 'react-redux';
import {storeFactory} from "./reducers";

const initialState = {};
export const store = storeFactory(initialState);

const render = () => ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Header/>
                <MainRouter/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

store.subscribe(render);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
