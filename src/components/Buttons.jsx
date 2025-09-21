import React from "react";
import { useState, useEffect } from "react";

function Buttons({ answer, score_array, setScore, answered, setAnswered, nextButtonPressed }) {

    const button_names = [
        "Hit",
        "Stand",
        "Split",
        "Double"
    ]

    return (
        <div className="options">
            {button_names.map(name => (
                <Click 
                    name={name}
                    key={name}
                    currentAnswer={answer}
                    score_array={score_array}
                    setScore={setScore}
                    answered={answered}
                    setAnswered={setAnswered}
                    nextButtonPressed={nextButtonPressed}
                />
            ))}
        </div>
    )
}

function Click({ currentAnswer, name, score_array, setScore, answered, setAnswered, nextButtonPressed }) {
    
    const score = score_array[0];
    const total = score_array[1];
    //correct_state true means user answered correctly, false means user answered incorrectly, null means user has not answered yet
    const [correct_state, setCorrectState] = useState(null); //null, true, false

    useEffect(() => {
        if (nextButtonPressed[0] == true && answered == true) {
            setAnswered(false);
            setCorrectState(null);
        }
    }, [nextButtonPressed, answered, setAnswered]);

    function handleClick() {
        //Do nothing if state is "answered"
        if (answered == true) {
            return;
        }

        setAnswered(true); //since answered == false, set it to true to mark this question is answered
        //Check if answer is correct
        if (currentAnswer === name) {
            //Update global counter
            setScore([score + 1, total + 1]); //TODO: score is broken currently
            console.log(`Correct! You chose: ${name} \n Your current score is: ${score} out of ${total}`);
            setCorrectState(true);
        }
        else if (currentAnswer != name) {
            setScore([score, total + 1]); //TODO: score is broken currently
            //Display correct answer
            console.log(`The correct answer was: ${currentAnswer}`);
            setCorrectState(false);
        }
    }

    let correct_class = "";

    if (correct_state == true && nextButtonPressed[0] == false) {
        correct_class = "correct_button";
    }
    else if (correct_state == false && nextButtonPressed[0] == false) {
        correct_class = "incorrect_button";
    }
    else {
        correct_class = "";
    }

    return <button className={`${name} option_box ${correct_class} `} onClick={handleClick}>{name}</button>        

}

export default Buttons;