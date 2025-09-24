import React from "react";
import { useState } from "react";

function AnswerText({ answered, correct_answer, score }) {

    const [prev_score, setPrevScore] = useState(score[0]);
    let isCorrect; //true/false

    let scoreChange = () => {
        let return_value;
        if (score[0] > prev_score) { //User answered correctly
            return_value =  true;
        }
        else if (score[0] == prev_score) { //User answered incorrectly
            return_value = false;
        }

        setPrevScore(score[0]);
        console.log(return_value)
        return return_value;
    }

    if (prev_score < score[0]) { //Updates whenever the score changes
        isCorrect = scoreChange();
    }
 
    if (answered == false) {
        return (
            <div className="answer_text" />        
        )
    }
    else if (answered == true) {
        console.log(prev_score, ",", score[0], ",", isCorrect);
        return (
            <div className="answer_text">
                {isCorrect ? "Correct!" : "Incorrect."} The correct answer is: {correct_answer}
            </div>
        )
    }
}

export default AnswerText;