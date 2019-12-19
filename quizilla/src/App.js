import React from 'react';
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

class App extends React.Component {
  state = {
    category: null,
    number_of_questions: null,
    difficulty: null,
    players: null
  };

  launchQuiz = (catId, number, diff, numOfPlayer) => {
    this.setState({
      category: catId, 
      number_of_questions: this.setTotalQuestions(number),
      difficulty: diff,
      players : numOfPlayer
    })
  }

  setTotalQuestions = (number) =>{
    return number > 10 ?  10 : number;
}

  resetState = () => {
    this.setState({category: null})
  }

  quizRoute = () => {
    if (this.state.category && this.state.difficulty && this.state.players) {
      return <Quiz catID={this.state.category} maxNumberOfQuestions={this.state.number_of_questions} diff={this.state.difficulty} players = {this.state.players}/>
    } else {
      return <Redirect to='/'/> 
    }
  }

  render(){
    return (
      <Router>   
      <div className="App">
        <Link to="/" className="homeButton"><h2>Quizilla</h2></Link>
      </div>
      <Switch>
        <Route path='/quiz' > 
          {this.quizRoute()}
        </Route>
        <Route 
        exact path="/" 
        render={(props) => <LandingPage {...props} pickCat={this.launchQuiz} reset={this.resetState}/>} />
      </Switch>
    </Router>
    );
  }
}

export default App;
