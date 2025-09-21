import React from 'react'
import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons.jsx'
import Random from './components/Random.jsx'
import Next from './components/Next.jsx'
import AnswerText from './components/AnswerText.jsx'

function App() {

  const [correct_answer, setAnswer] = useState("Hit"); // Correct answer for dealer/player pair, passed as state to component
  const [score, setScore] = useState([0, 0]); // first number is score, second number is total questions answered
  const [answered, setAnswered] = useState(false); //false means user has not submitted an answer
  const [nextButtonPressed, setNextButtonPressed] = useState(false); //false means user has not pressed next button

  if (correct_answer != "Hit") {
    //TODO: hardcoded answer for now, need component to check answer later
    setAnswer("Hit");
  }

  //TODO: integrate this into a function that generates a new card
  Random(); // Generate new dealer/player pair

  return (
    <div>

      <div className="dealer_block">
        <div className="hole_card card">Card 1 (Hole)</div>
        <div className="dealer_card card">Card 2 (Up)</div>
        <div className="dealer_title title">Dealer</div>
      </div>

      <div className="player_block">
        <div className="player_card1 card">Card 1</div>
        <div className="player_card2 card">Card 2</div>
        <div className="player_title title">You</div>
      </div>

      <Buttons 
      answer={correct_answer} 
      score_array={score} setScore={setScore} 
      answered={answered} setAnswered={setAnswered} 
      nextButtonPressed={[nextButtonPressed, setNextButtonPressed]} />

      <AnswerText answered={answered} correct_answer={correct_answer} />

      <div className="next_button_box">
        <Next toggle_answer={[answered, setAnswered]} nextButtonPressedFunc={setNextButtonPressed} />
      </div>
    
    </div>
    )
}

export default App
