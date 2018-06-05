import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Login from './Login';
import App from './App';


// ReactDOM.render(
//   <App url='http://localhost:2000/candidateInfo'
//        pollInterval={2000}/>,
//   document.getElementById('root')
// );import {
  import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'

  
ReactDOM.render(
  <Router>        
      <Route component={Home}>
          <Route path='/' component={Login}></Route> 
            <Route path="/about" component={App}/>
        </Route>                  
  </Router> ,
  document.getElementById('root')
);
