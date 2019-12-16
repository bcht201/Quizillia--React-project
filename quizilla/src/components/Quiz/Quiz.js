import React from 'react'
import axios from 'axios'

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
        .then(response => this.setState({data: response}))

    }

    render() {
        // console.log(this.state.data.results[0].question);
        return (
            <div>
                {this.state.data.length === 0 ? null : 
                <p>{this.state.data.results[0].question}</p>}

            </div>
            
        )
    }
}

export default Quiz;