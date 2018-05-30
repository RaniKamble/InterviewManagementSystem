import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <App url='http://localhost:2000/candidateInfo'
       pollInterval={2000}/>,
  document.getElementById('root')
);