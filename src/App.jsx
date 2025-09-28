import React, { use } from 'react'
import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons.jsx'
import Random from './components/Random.jsx'
import Next from './components/Next.jsx'
import AnswerText from './components/AnswerText.jsx'

function App() {

  const [correct_answer, setAnswer] = useState("Hit"); // Correct answer for dealer/player pair, passed as state to component
  const [score, setScore] = useState([0, 1]); // first number is score, second number is total questions answered
  const [answered, setAnswered] = useState(false); //false means user has not submitted an answer
  const [correct_state, setCorrect_state] = useState(false); //true means user answered correctly

  
  //Generate new card set and answer
  const [random, setRandom] = useState(Random()); //State to hold dealer/player pair
  
  if (correct_answer != "Hit") {
    //TODO: hardcoded answer for now, need component to check answer later
    setAnswer("Hit");
  }
  
  return (
    <div>

      <div className="dealer_block">
        <div className="hole_card card">X</div>
        <div className="dealer_card card">{random.dealer_card_string}</div>
        <div className="dealer_title title">Dealer</div>
      </div>

      <div className="player_block">
        <div className="player_card1 card">{random.player_card1_string}</div>
        <div className="player_card2 card">{random.player_card2_string}</div>
        <div className="player_title title">You</div>
      </div>

      <Buttons 
      answer={correct_answer} 
      score_array={score} setScore={setScore} 
      answered={answered} setAnswered={setAnswered} correct_state={correct_state} setCorrect_state={setCorrect_state} />

      <AnswerText answered={answered} correct_answer={correct_answer} correct_state={correct_state} />

      <div className="score_box">
        <p className="score_text">Score: {score[0]} / {score[1]}</p>
        <p className="score_text"> {(score[0] / score[1] * 100).toFixed(2)}%</p>
      </div>

      <div className="next_button_box">
        <Next toggle_answer={[answered, setAnswered]} score={score} setScore={setScore} setRandom={setRandom} />
      </div>
    
    </div>
    )
}

export default App
