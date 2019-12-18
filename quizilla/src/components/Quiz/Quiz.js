import React from 'react'
import axios from 'axios'
import GameBox from '../GameBox/GameBox';

class Quiz extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            data: [],
            index: 0,
            score: 0
        }
    }

    componentDidMount() {
        this.apiCall();
    }



    apiCall = () => {
        axios.get(`https://opentdb.com/api.php?amount=${this.props.maxNumberOfQuestions}&category=${this.props.catID}&difficulty=${this.props.diff}`)
        .then(response => {
            console.log(response.data.results)
            this.setState({data: response.data.results})})
    }

    calculateScore = (answer) =>{
        console.log("I calculated the score");
        let points;
        if(answer === this.state.data[this.state.index].correct_answer){
            points = 1;
        } else{
            points = -1;
        }
        this.setState(prevState => {return ({score: prevState.score + points, index: prevState.index + 1})})
        
    }

    generateQuestion = () => {
        if(this.state.index === this.props.maxNumberOfQuestions) {
           let emojis = [<p>&#128563;</p>, <p>&#128513;</p> ];
            return(<p> You got {this.state.score}/{this.props.maxNumberOfQuestions} {this.state.score < 0? emojis[0] : emojis[1]} </p>)
        }
        else if(this.state.data.length !== 0) { 
            return( <GameBox gameInfo={this.state.data[this.state.index]} 
            calculateScore = {this.calculateScore}/>) 
        }
        else {
            return;
       }
    }

    render() {
        return (
            <div>
                {this.generateQuestion()}
            </div>
            
        )
    }
}

export default Quiz;