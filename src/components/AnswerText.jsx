import React from "react";

function AnswerText({ answered, correct_answer }) {
    if (answered == false) {
        return (
            <div className="answer_text" />        
        )
    }
    else if (answered == true) {
        return (
            <div className="answer_text">
                The correct answer is: {correct_answer}
            </div>
        )
    }
}

export default AnswerText;