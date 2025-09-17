import React from "react";
import { useContext } from "react";

function Buttons({ answer }) {


    return (
        <div className="options">
            <Click name="Hit" currentAnswer={answer}  />
            <Click name="Stand" currentAnswer={answer} />
            <Click name="Split" currentAnswer={answer} />
            <Click name="Double" currentAnswer={answer} />
        </div>
    )
}

function Click({ currentAnswer, name }) {

    function handleClick() {
        //Check if answer is correct
        if (currentAnswer === name) {
            alert(`Correct! You chose: ${name}`);
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