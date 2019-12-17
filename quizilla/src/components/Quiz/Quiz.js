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
        axios.get(`https://opentdb.com/api.php?amount=10&category=20&difficulty=hard`)
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

    render() {
        return (
            <div>
                {this.state.data.length === 0 ? null : 
                <GameBox gameInfo={this.state.data[this.state.index]} calculateScore = {this.calculateScore}/>}
                
                
            </div>
            
        )
    }
}

export default Quiz;