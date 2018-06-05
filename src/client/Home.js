import React, { Component } from 'react';
import Login from './Login';
import App from './App';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'


export default class Home extends Component {
    render() {
        return (
            <Router>
                <Route path='/' component={Login}></Route>               
            </Router> 
        )
    }
}