import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import LandingPage from './containers/LandingPage/LandingPage';
import Quiz from './components/Quiz/Quiz';
import axios from 'axios';

class App extends React.Component {
  state = {category: null};

  launchQuiz = (catId) => {
    this.setState({category: catId})
  }

  render(){
    return (
      <Router>   
      <div className="App">
        <Link to="/" className="homeButton"><h2>Quizilla</h2></Link>
      </div>
      <Switch>
        <Route path='/quiz' > 
          {this.state.category ? <Quiz /> : <Redirect to='/'/> }
        </Route>
        <Route exact path="/" render={(props) => <LandingPage {...props} pickCat={this.launchQuiz}/>} />
      </Switch>
    </Router>
    );
  }
}

export default App;
