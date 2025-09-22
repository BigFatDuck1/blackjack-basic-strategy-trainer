import React from "react";

function Next({ toggle_answer, nextButtonPressedFunc }) {

    const answered = toggle_answer[0]; //true means user has submmited answer, false means user hasn't submitted an answer
    const setAnswered = toggle_answer[1];

    const reset = () => {
        if (answered == false) {
            //User has not submitted any answer yet
            alert("Please select an answer");
        }

        setAnswered(false); //Changes state of answered to false
        nextButtonPressedFunc(true); //Changes state of nextButtonPressed to true
    }


    return (
        <div className="next">
            <button className="next_button" onClick={reset} >Next</button>
        </div>
    )
}

export default Next;