import React from "react";

function AnswerText({ answered, correct_answer, correct_state }) {


    if (answered == false) {
        return (
            <div className="answer_text" />        
        )
    }
    else if (answered == true) {
        return (
            <div className="answer_text">
                {correct_state ? `${correct_answer} is correct!` : `Incorrect. Answer: ${correct_answer}`}
            </div>
        )
    }
}

export default AnswerText;