import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import './index.css';

const Application = (
<BrowserRouter>
    <App />
</BrowserRouter>
);

ReactDOM.render( Application,
    document.getElementById('root')
);
