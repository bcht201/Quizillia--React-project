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
  state = {category: null};

  launchQuiz = (catId, number) => {
    this.setState({category: catId, number_of_questions: number})
  }

  resetState = () => {
    this.setState({category: null})
  }

  render(){
    return (
      <Router>   
      <div className="App">
        <Link to="/" className="homeButton"><h2>Quizilla</h2></Link>
      </div>
      <Switch>
        <Route path='/quiz' > 
          {this.state.category ? <Quiz catID={this.state.category}/> : <Redirect to='/'/> }
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
