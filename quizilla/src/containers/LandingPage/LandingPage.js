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
        max_questions: null,
        numberOfPlayers: 1
    };
    
    getCategories = () => {
        axios.get("https://opentdb.com/api_category.php")
        .then(response => this.setState({categories: response.data.trivia_categories}, ));
    }

    componentDidMount(){
        this.props.reset();
        this.getCategories();
    }
    
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value}, () =>{
            if(this.state.difficulty !== null && this.state.chosen_category !== null){
                this.getQuestionCount();
            }
        });
    }

    getQuestionCount = () => {
        axios.get(`https://opentdb.com/api_count.php?category=${this.state.chosen_category}`)
        .then(response => this.setState({question_count_data: response.data.category_question_count}, () => {
            this.assignQuestionCount(this.state.difficulty)
        }));
    }

    assignQuestionCount = (difficulty) => {
        this.setState({max_questions: this.state.question_count_data[`total_${difficulty}_question_count`]}, () => {
            this.props.pickCat(this.state.chosen_category, this.state.max_questions, this.state.difficulty, this.state.numberOfPlayers);
        })
    }

    render(){
        return (
            <div>
                <Link to="/quiz" className="quizButton" onClick={this.onClickHandler}> <h2>Start Quiz!</h2> </Link>

                <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value= {this.state.category}
                    onChange= {(event) => this.handleChange(event)}
                    name="chosen_category"
                    displayEmpty
                    >
                        <MenuItem disabled>Pick a category</MenuItem>
                    {this.state.categories.map(category =>{
                        return(<MenuItem value={category.id}>{category.name}</MenuItem>)
                    })}
                </Select>

                <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value= {this.state.category}
                    onChange= {(event) => this.handleChange(event)}
                    name="difficulty"
                    displayEmpty
                    >
                        <MenuItem disabled>Pick a difficulty</MenuItem>
                        <MenuItem value="easy">Easy</MenuItem>
                        <MenuItem value="medium">Medium</MenuItem>
                        <MenuItem value="hard">Hard</MenuItem>
                </Select>

                <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value= {this.state.category}
                    onChange= {(event) => this.handleChange(event)}
                    name="numberOfPlayers"
                    displayEmpty
                    >
                        <MenuItem disabled>Number of players</MenuItem>
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                </Select>
            </div>
        )
    }

}

export default LandingPage;