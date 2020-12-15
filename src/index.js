import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './componets/login/index.jsx';
import Favoritos from './componets/favoritos/index.jsx';
import Site from './componets/site/index.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
   <Router>
        <Switch>
            <Router path="/site">
                <Site/>
            </Router>
            <Route path="/favoritos">
                <Favoritos/>
            </Route>
            <Route path="/">
                <Login/>
            </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);