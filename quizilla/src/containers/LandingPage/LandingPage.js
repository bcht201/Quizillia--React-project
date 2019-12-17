import React from 'react';
import { Link} from 'react-router-dom';
import {Select, MenuItem} from '@material-ui/core';
import axios from 'axios';

class LandingPage extends React.Component{
    state = {categories:[]};

    componentDidMount(){
        axios.get("https://opentdb.com/api_category.php")
        .then(response => this.setState({categories: response.data.trivia_categories}));
    }

    render(){
        return (
            <div>
                <Link to="/quiz" className="quizButton">
                    <h2>Start Quiz!</h2>
                </Link>
                
                <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value= "ten"
                    displayEmpty
                    >
                    {this.state.categories.map(category =>{
                        return(<MenuItem value={category.id}>{category.name}</MenuItem>)
                    })}
                </Select>
            </div>
        )
    }

}

export default LandingPage;