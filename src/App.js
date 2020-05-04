import React from 'react';
import Home from './screens/Home'
import Work from './screens/Works'
import HeaderImage from './img/homeBack.png'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';

export default class App extends React.Component{
  

  render(){
    return (
      <Router>
        <div className="App">
            <div className="Back">
              <img className="BackImage" src={HeaderImage}/>
            </div>
            <Switch>
              <Route path='/work'>
                <Work/>
              </Route>
              <Route path='/'>
                <Home/>
              </Route>
            </Switch>
            <p className="copyright">&copy; 2020 Amber Yiyao Zhou</p>
        </div>
      </Router>
    );
  }
} 
