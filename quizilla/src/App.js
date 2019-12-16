import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch
} from 'react-router-dom';
import './App.css';
import LandingPage from './containers/LandingPage/LandingPage';

function App() {
  return (
    <Router>   
      <div className="App">
        <Link to="/quiz" className="homeButton"><h2>Quizilla</h2></Link>
      </div>
      <Switch>
        <Route path="/" component={LandingPage}/>
        {/* <Route path="/quiz" component={Quiz}/> */}
      </Switch>
    </Router>
  );
}

export default App;
