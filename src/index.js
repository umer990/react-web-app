import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import Home from './js/containers/pages/Home';
import Awards from './js/containers/pages/Awards';
import TV from './js/containers/pages/TV';

import './sass/main.css';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/awards" component={Awards}/>
        <Route path="/TV" component={TV}/>
    </Router>,
  document.getElementById('root')
);
