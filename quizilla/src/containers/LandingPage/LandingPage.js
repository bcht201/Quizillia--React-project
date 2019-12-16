import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Quiz from '../../components/Quiz/Quiz'

const LandingPage = ()=>{
    return (
        <div>
            <Link to="/quiz" className="quizButton">
                <h2>Start Quiz!</h2>
            </Link>
            {/* <Switch>
                <Route path='/quiz' component={Quiz} />
            </Switch> */}
        </div>);
}

export default LandingPage;