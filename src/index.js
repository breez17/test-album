import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import thunk from 'redux-thunk';
import rootReducer from './data/reducer';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux'


/*Stylesheet*/

import './index.css';

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
);


const Application = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(Application,
    document.getElementById('root')
);