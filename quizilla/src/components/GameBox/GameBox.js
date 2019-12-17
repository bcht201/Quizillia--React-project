import React from 'react'

const GameBox = (props) => {
    let answers = [...props.gameInfo.incorrect_answers, props.gameInfo.correct_answer].sort();  
    
    const onClickHandler = (event) => {
        // console.log(event.target.value);
        props.calculateScore(event.target.value);
    }

    return(
        <div>
            <h3>{props.gameInfo.question}</h3>
            
            {answers.map(answer => {
                return <button value = {answer} id = {answer} onClick={(event)=> onClickHandler(event)}>{answer}</button>
            })}
        </div>
    )
}

export default GameBox