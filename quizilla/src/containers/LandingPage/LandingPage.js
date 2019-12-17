import React from 'react';
import { Link} from 'react-router-dom';
import {Select, MenuItem} from '@material-ui/core';
import axios from 'axios';

class LandingPage extends React.Component{
    state = {
            categories:[],
            chosen_category: null    
    };

    componentDidMount(){
        axios.get("https://opentdb.com/api_category.php")
        .then(response => this.setState({categories: response.data.trivia_categories}));
    }

    handleChange = (event) => {
        this.setState({chosen_category: event.target.value});
    }

    onClickHandler =() => {
        this.state.chosen_category && this.props.pickCat(this.state.chosen_category);
    }

    render(){
        return (
            <div>
                <Link to="/quiz" className="quizButton" onClick={this.onClickHandler}>
                    <h2>Start Quiz!</h2>
                </Link>
                
                <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value= {this.state.category}
                    onChange= {(event) => this.handleChange(event)}
                    displayEmpty
                    >
                    {this.state.categories.map(category =>{
                        return(<MenuItem value={category.id}>{category.name}</MenuItem>)
                    })}
                </Select>
                <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value= {this.state.category}
                    onChange= {(event) => this.handleChange(event)}
                    displayEmpty
                    >
                    <MenuItem>Hard</MenuItem>
                    <MenuItem>Hard</MenuItem>
                    <MenuItem>Hard</MenuItem>
                    })}
                </Select>
            </div>
        )
    }

}

export default LandingPage;