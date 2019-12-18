import React from 'react'
import {Parser} from 'html-to-react';  

const GameBox = (props) => {
    const formatQuestion = () => {
        let question = props.gameInfo.question
        const htmlToReactParser = new Parser();
        const reactElement = htmlToReactParser.parse(question)
        return reactElement
    }

    let answers = [...props.gameInfo.incorrect_answers, props.gameInfo.correct_answer].sort();  
    const onClickHandler = (event) => {
        props.calculateScore(event.target.value);
    }

    return(
        <div>
            <h3>{formatQuestion()}</h3>
            {answers.map(answer => {
                const htmlToReactParser2 = new Parser();
                return <button value = {answer} id = {answer} onClick={(event)=> onClickHandler(event)}>{htmlToReactParser2.parse(answer)}</button>
            })}
        </div>
    )
}

export default GameBox