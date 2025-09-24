import React, { use } from "react";
import { useRef, useState } from "react";

function AnswerText({ answered, correct_answer, score }) {


    if (answered == false) {
        return (
            <div className="answer_text" />        
        )
    }
    else if (answered == true) {
        return (
            <div className="answer_text">
                {1 ? "Correct!" : "Incorrect."} The correct answer is: {correct_answer}
            </div>
        )
    }
}

export default AnswerText;