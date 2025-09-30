import React from "react";
import { useState } from "react";

function Buttons({ answer, score_array, setScore, answered, setAnswered, correct_state, setCorrect_state }) {

    const button_names = [
        "Hit",
        "Stand",
        "Split",
        "Double"
    ]

    const total = score_array[1];
    //Changing the key prop forces remount of the component, resetting its internal state


    return (
        <div className="options">
            {button_names.map(name => (
                <Click 
                    name={name}
                    key={`${name}_${total}`}
                    currentAnswer={answer}
                    score_array={score_array}
                    setScore={setScore}
                    answered={answered}
                    setAnswered={setAnswered}
                    global_correct_state={correct_state} setGlobalCorrect_state={setCorrect_state}
                />
            ))}
        </div>
    )
}

function Click({ currentAnswer, name, score_array, setScore, answered, setAnswered, setGlobalCorrect_state }) {
    
    const score = score_array[0];
    const total = score_array[1];
    //correct_state true means user answered correctly, false means user answered incorrectly, null means user has not answered yet
    const [correct_state, setCorrectState] = useState(null); //null, true, false

    function handleClick() {
        //Do nothing if state is "answered"
        if (answered == true) {
            return;
        }

        setAnswered(true); //since answered == false, set it to true to mark this question is answered
        //Check if answer is correct
        if (currentAnswer === name) {
            //Update global counter
            setScore([score + 1, total]); 
            setCorrectState(true);
            setGlobalCorrect_state(true);
        }
        else if (currentAnswer != name) {
            setScore([score, total]);
            //Display correct answer
            setCorrectState(false);
            setGlobalCorrect_state(false);
        }
    }

    let correct_class = "";

    if (correct_state == true && answered == true) {
        correct_class = "correct_button";
    }
    else if (correct_state == false && answered == true) {
        correct_class = "incorrect_button";
    }
    else if (answered == false) {
        correct_class = "";
    }

    return <button className={`${name} option_box ${correct_class} `} onClick={handleClick}>{name}</button>        

}

export default Buttons;