import React from 'react'
import axios from 'axios'
import GameBox from '../GameBox/GameBox';
import './Quiz.css'

class Quiz extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            data: [],
            index: 0,
            score: [],
            numberOfPlayers: Number(this.props.players),
            counter: 0
            
        }
    }

    componentDidMount = () => {
        this.createScoreArray()
        this.apiCall();
    }

    createScoreArray = () => {
        this.setState({score: Array(this.state.numberOfPlayers).fill(0)})
    }

    apiCall = () => {
        axios.get(`https://opentdb.com/api.php?amount=${this.props.maxNumberOfQuestions}&category=${this.props.catID}&difficulty=${this.props.diff}`)
        .then(response => {
            this.setState({data: response.data.results})})
    }

    // calculateScore = answer =>{
    //     let points;
    //     if(answer === this.state.data[this.state.index].correct_answer){
    //         points = 1;
    //     } else{
    //         points = -1;
    //     }
    //     this.setState(prevState => {
    //         let newScore = [...prevState.score];
    //         let questionIncrement;
    //         if(this.state.numberOfPlayers === 1) {
    //             questionIncrement = 1;
    //         } else {
    //             questionIncrement = prevState.counter % this.state.numberOfPlayers
    //         }
    //         newScore[this.state.counter % this.state.numberOfPlayers] += points;
    //         return ({score: newScore, counter: prevState.counter + 1, index: prevState.index + questionIncrement})})
    // }

    nextGameState = answer =>{
        let newScore = this.calculateScore(answer);
        let nextQuestion = this.updateQuestion();
        this.setState({score : newScore, counter: this.state.counter + 1, index: this.state.index + nextQuestion});
    }

    calculateScore = (answer) =>{
        let points = this.state.score;
        let currentPlayer = this.state.counter % this.state.numberOfPlayers;
        if(answer === this.state.data[this.state.index].correct_answer){
            points[currentPlayer] += 1;
        } else{
            points[currentPlayer] += -1;
        }
        return points;
    };

    updateQuestion = () =>{
        let questionIncrement;
        if(this.state.numberOfPlayers === 1) {
            questionIncrement = 1;
        } else {
            questionIncrement = this.state.counter % this.state.numberOfPlayers
        }
        return questionIncrement;
    }

    updateScore = () =>{

    }

    gameState = () => {
        if(this.state.index === this.props.maxNumberOfQuestions) {
            return this.generateResults()
        }
        else if(this.state.data.length !== 0) { 
            return this.generateNextQuestion()
        }
        else {
            return <p>LOADING</p>;
       }
    }

    generateResults = () => {
        let emojis = [<p>&#128563;</p>, <p>&#128513;</p> ];
        return this.state.score.map((score, index)=> {
            return(
                <p className = "resultsMsg"> Player {index+1} got {score}/{this.props.maxNumberOfQuestions}{score < 0? emojis[0] : emojis[1]} </p>
            )
        })
    }

    generateNextQuestion = () => {
        return( 
            <div>
                <p className = 'currentPlayer'>Current Player: {this.state.counter % this.state.numberOfPlayers + 1}</p>
                <GameBox gameInfo={this.state.data[this.state.index]} calculateScore = {this.nextGameState}/>
            </div>) 
    }

    render() {
        return (
            <div>
                {this.gameState()}
            </div>
            
        )
    }
}

export default Quiz;