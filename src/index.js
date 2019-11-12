import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

import thunk from 'redux-thunk';
import rootReducer from '../src/reducer';
import { applyMiddleware, compose, createStore } from 'redux';



/*Stylesheet*/

import './index.css';

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
);



const Application = (
<BrowserRouter>
    <App />
</BrowserRouter>
);

ReactDOM.render( Application,
    document.getElementById('root')
);