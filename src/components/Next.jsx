import React from "react";

function Next({ toggle_answer, nextButtonPressedFunc }) {

    const answer_state = toggle_answer[0]; //true means user has submmited answer, false means user hasn't submitted an answer

    const reset = () => {
        if (answer_state == false) {
            //User has not submitted any answer yet
            alert("Please select an answer");
        }

        toggle_answer[1](false); //Changes state of answered to false
        nextButtonPressedFunc(true); //Changes state of nextButtonPressed to true
    }


    return (
        <div className="next">
            <button className="next_button" onClick={reset} >Next</button>
        </div>
    )
}

export default Next;