import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux"
import store from "./redux";
import NewHome from "./component/Home/newHome";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <NewHome/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
