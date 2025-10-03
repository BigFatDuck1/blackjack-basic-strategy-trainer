import React from "react";
import Random from "./Random.jsx";
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';




function Next({ toggle_answer, score, setScore, setRandom, setAnswer, setCorrect_state }) {

    const answered = toggle_answer[0]; //true means user has submmited answer, false means user hasn't submitted an answer
    const setAnswered = toggle_answer[1];

    const reset = () => {
        if (answered == false) {
            //User has not submitted any answer yet
            //alert("Please select an answer");
            return;
        }

        setAnswered(false); //Changes state of answered to false
        setScore([score[0], score[1] + 1]);
        const newPair = Random();
        setRandom(newPair); // Generate new dealer/player pair
        setAnswer(newPair.answer); // Set correct answer to the correct move for the new dealer/player pair
        setCorrect_state(null); //Reset correct_state to null for new question

    }


    return (
        // <div className="next">
        //     <button className="next_button" onClick={reset} data-pr-tooltip="Please select an answer" >Next</button>
        // </div>
        <div className="next">
            {answered ? <Button label="Next" className="next_button" onClick={reset} 
            raised /> : 
            <Button label="Next" className="next_button" onClick={reset} 
            //tooltip={answered ? "" : "Please select an answer"} 
            //tooltipOptions={{ position: 'bottom' }}
            disabled
            />}
        </div>
    )
}

export default Next;