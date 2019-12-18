import React from 'react';
import { Link} from 'react-router-dom';
import {Select, MenuItem} from '@material-ui/core';
import axios from 'axios';

class LandingPage extends React.Component{
    state = {
        categories:[],
        chosen_category: null, 
        difficulty: null,
        question_count_data: null,
        max_questions: null
    };
    
    componentDidMount(){
        this.props.reset();
        this.getCategories();
    }

    componentDidUpdate = (prevProp, prevState) => {
        if(prevState.chosen_category !== this.state.chosen_category){
            this.getQuestionCount(this.state.chosen_category);
        }
        if(prevState.difficulty !== this.state.difficulty){
            this.assignQuestionCount(this.state.difficulty);
        }
    }

    getCategories = () => {
    axios.get("https://opentdb.com/api_category.php")
    .then(response => this.setState({categories: response.data.trivia_categories}, ));
    }
    
    getQuestionCount= (num) => {
        axios.get(`https://opentdb.com/api_count.php?category=${num}`)
        .then(response => this.setState({question_count_data: response.data.category_question_count}))

    }

    assignQuestionCount = (difficulty) => {
        this.setState({max_questions: this.state.question_count_data[`total_${difficulty}_question_count`]})
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    onClickHandler =() => {
        if(this.state.chosen_category && this.state.difficulty){
            this.props.pickCat(this.state.chosen_category, this.state.max_questions);
        };
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
                    displayEmpty
                    value= {this.state.category}
                    onChange= {(event) => this.handleChange(event)}
                    name="chosen_category"
                    >
                        <MenuItem disabled>Pick a category</MenuItem>
                    {this.state.categories.map(category =>{
                        return(<MenuItem value={category.id}>{category.name}</MenuItem>)
                    })}
                </Select>
                <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    displayEmpty
                    value= {this.state.category}
                    onChange= {(event) => this.handleChange(event)}
                    name="difficulty"
                    >
                        <MenuItem disabled>Pick a difficulty</MenuItem>
                        <MenuItem value="easy">Easy</MenuItem>
                        <MenuItem value="medium">Medium</MenuItem>
                        <MenuItem value="hard">Hard</MenuItem>
                </Select>
            </div>
        )
    }

}

export default LandingPage;