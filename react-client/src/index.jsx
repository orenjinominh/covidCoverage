import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import App from './Pages/App.jsx';

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
