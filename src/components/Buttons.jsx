import React from "react";

function Buttons({ answer, score }) {


    return (
        <div className="options">
            <Click name="Hit" currentAnswer={answer} score={score} />
            <Click name="Stand" currentAnswer={answer} />
            <Click name="Split" currentAnswer={answer} />
            <Click name="Double" currentAnswer={answer} />
        </div>
    )
}

function Click({ currentAnswer, name, score }) {

    function handleClick() {
        //Check if answer is correct
        if (currentAnswer === name) {
            alert(`Correct! You chose: ${name}`);
            console.log(score);
            //TODO: Update global counter
        }
        else if (currentAnswer != name) {
            alert("Try again!");
        }
    }

    return (
        <button className={`${name} option_box`} onClick={handleClick}>{name}</button>
    )
}

export default Buttons;