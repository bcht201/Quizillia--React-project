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
import Quiz from './components/Quiz/Quiz';
import axios from 'axios';

class App extends React.Component {
  

  render(){
    return (
      <Router>   
      <div className="App">
        <Link to="/" className="homeButton"><h2>Quizilla</h2></Link>
      </div>
      <Switch>
        <Route path="/quiz" component={Quiz}/>
        <Route exact path="/" component={LandingPage}/>
      </Switch>
    </Router>
    );
  }
}

export default App;
