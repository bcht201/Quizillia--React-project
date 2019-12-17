import React from 'react'

const GameBox = (props) => {
    let answers = [...props.gameInfo.incorrect_answers, props.gameInfo.correct_answer].sort();  
    const onClickHandler = () => {
          
    }
    return(
        <div>
            <h3>{props.gameInfo.question}</h3>
            
            {answers.map(answer => {
                return <button>{answer}</button>
            })}
        </div>
    )
}

export default GameBox