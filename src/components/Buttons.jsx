import React from "react";

function Buttons({ answer, score_array, setScore }) {


    return (
        <div className="options">
            <Click name="Hit" currentAnswer={answer} score_array={score_array} setScore={setScore} />
            <Click name="Stand" currentAnswer={answer} score_array={score_array} setScore={setScore} />
            <Click name="Split" currentAnswer={answer} score_array={score_array} setScore={setScore} />
            <Click name="Double" currentAnswer={answer} score_array={score_array} setScore={setScore} />
        </div>
    )
}

function Click({ currentAnswer, name, score_array, setScore }) {
    
    const score = score_array[0];
    const total = score_array[1];

    function handleClick() {
        //Check if answer is correct
        if (currentAnswer === name) {
            //Update global counter
            setScore([score + 1, total + 1]);
            alert(`Correct! You chose: ${name} \n Your current score is: ${score} out of ${total}`);
        }
        else if (currentAnswer != name) {
            alert("Try again!");
            setScore([score, total + 1]);
            //Display correct answer
            alert(`The correct answer was: ${currentAnswer}`);
        }
    }

    return (
        <button className={`${name} option_box`} onClick={handleClick}>{name}</button>
    )
}

export default Buttons;