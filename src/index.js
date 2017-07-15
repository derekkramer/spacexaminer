import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Header from './components/Header';
import Viewer from './components/Viewer';
import Manifest from './components/Manifest';

ReactDOM.render(
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route exact path="/" component={Viewer} />
            <Route path="/manifest" component={Manifest} />
        </div>
    </Router>
,
    document.getElementById('root')
);
