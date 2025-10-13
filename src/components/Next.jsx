import React from "react";
import Random from "./Random.jsx";
import HitStand from "./HitStand.jsx";
import HardTotal from "./HardTotal.jsx";
import SoftTotal from "./SoftTotal.jsx";
import { PrimeReactProvider } from "primereact/api";
import { Button } from 'primereact/button';




function Next({ toggle_answer, score, setScore, setRandom, setAnswer, setCorrect_state, randomizer }) {

    const answered = toggle_answer[0]; //true means user has submmited answer, false means user hasn't submitted an answer
    const setAnswered = toggle_answer[1];

    const value = {
        ripple: true,
    };

    const reset = () => {
        if (answered == false) {
            //User has not submitted any answer yet
            //alert("Please select an answer");
            return;
        }

        setAnswered(false); //Changes state of answered to false
        setScore([score[0], score[1] + 1]);
        let newPair = HitStand(); //TODO: dynamically change this function based on difficulty/randomizer state
        switch (randomizer) {
            case "HitStand":
                newPair = HitStand();
                break;
            case "HardTotal":
                newPair = HardTotal();
                break;
            case "SoftTotal":
                newPair = SoftTotal();
                break;
            case "Random":
                newPair = Random();
                break;
        }
        setRandom(newPair); // Generate new dealer/player pair
        setAnswer(newPair.answer); // Set correct answer to the correct move for the new dealer/player pair
        setCorrect_state(null); //Reset correct_state to null for new question

    }


    return (
        // <div className="next">
        //     <button className="next_button" onClick={reset} data-pr-tooltip="Please select an answer" >Next</button>
        // </div>
        <PrimeReactProvider value={value} >
            <div className="next">
            {answered ? <Button label="Next" className="next_button p-ripple" onClick={reset} 
            raised /> : 
            <Button label="Next" className="next_button" onClick={reset} 
            //tooltip={answered ? "" : "Please select an answer"} 
            //tooltipOptions={{ position: 'bottom' }}
            disabled
            />}
        </div>
        </PrimeReactProvider>
    )
}

export default Next;