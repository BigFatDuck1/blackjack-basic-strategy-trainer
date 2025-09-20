import React from "react";
import { useState } from "react";

function Buttons({ answer, score_array, setScore, answered, setAnswered }) {

    return (
        <div className="options">
            <Click 
            name="Hit" 
            currentAnswer={answer} 
            score_array={score_array} setScore={setScore} 
            answered={answered} setAnswered={setAnswered} 
            />

            <Click name="Stand" 
            currentAnswer={answer} 
            score_array={score_array} setScore={setScore} 
            answered={answered} setAnswered={setAnswered} 
            />

            <Click name="Split" 
            currentAnswer={answer} 
            score_array={score_array} setScore={setScore} 
            answered={answered} setAnswered={setAnswered} 
            />

            <Click name="Double" 
            currentAnswer={answer} 
            score_array={score_array} setScore={setScore} 
            answered={answered} setAnswered={setAnswered} 
            />
        </div>
    )
}

function Click({ currentAnswer, name, score_array, setScore, answered, setAnswered }) {
    
    const score = score_array[0];
    const total = score_array[1];
    const [correct_state, setCorrectState] = useState(null); //null, true, false 

    function handleClick() {
        //Do nothing if state is "answered"
        if (answered == true) {
            return;
        }

        setAnswered(true);
        //Check if answer is correct
        if (currentAnswer === name) {
            //Update global counter
            setScore([score + 1, total + 1]);
            console.log(`Correct! You chose: ${name} \n Your current score is: ${score} out of ${total}`);
            setCorrectState(true);
        }
        else if (currentAnswer != name) {
            setScore([score, total + 1]);
            //Display correct answer
            console.log(`The correct answer was: ${currentAnswer}`);
            setCorrectState(false);
        }
    }

    if (correct_state == true) {
        return (
            <button className={`${name} option_box correct_button`} onClick={handleClick}>{name}</button>
        )
    }
    else if (correct_state == false) {
        return (
            <button className={`${name} option_box incorrect_button`} onClick={handleClick}>{name}</button>
        )
    }
    else {
        return <button className={`${name} option_box `} onClick={handleClick}>{name}</button>        
    }
}

export default Buttons;