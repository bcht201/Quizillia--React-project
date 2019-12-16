import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>   
      <div className="App">
        <p>Hello World!</p>
      </div>
    </Router>
  );
}

export default App;
