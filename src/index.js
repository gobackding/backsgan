import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {HashRouter as Router , Route } from "react-router-dom"

ReactDOM.render(
    <Router>
        <Route path="/" component={App} />
    </Router>
    ,
     document.getElementById('root'));


