import React, { Component } from 'react';
import ReactDom from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Nav from './Nav'
import Home from './Home';
import ChartByRace from './ChartByRace';
import Contact from './Contact';


function App() {
  return (
    <Router>
      <div className='app'>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/ChartByRace' component={ChartByRace} />
          <Route path='/contact' component={Contact} />

        </Switch>
      </div>
    </Router>
  )

};

export default App;