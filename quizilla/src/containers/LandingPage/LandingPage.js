import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = ()=>{
    return (
        <div>
            <Link to="/quiz" className="quizButton">
                <button>Start Quiz!</button>
            </Link>
        </div>);
}

export default LandingPage;