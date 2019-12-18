import React from 'react';
import { Link} from 'react-router-dom';
import {Select, MenuItem, InputLabel} from '@material-ui/core';
import axios from 'axios';

class LandingPage extends React.Component{
    state = {
        categories:[],
        chosen_category: null, 
        difficulty: null   
    };

    componentDidMount(){
        this.getCategories()
    }

    getCategories = () => {
    axios.get("https://opentdb.com/api_category.php")
    .then(response => this.setState({categories: response.data.trivia_categories}, ));
    }
    
    getQuestionCount= (num) => {
        axios.get(`https://opentdb.com/api_count.php?category=${num}`)
        .then(response => console.log(response));
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
                <InputLabel id="demo-simple-select-label">Pick a category</InputLabel>
                <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    displayEmpty
                    value= {this.state.category}
                    onChange= {(event) => this.handleChange(event)}
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