import React from 'react'
import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons.jsx'
//Different set of questions depending on "difficulty" state
import Random from './components/Random.jsx'
import HitStand from './components/HitStand.jsx'

import Next from './components/Next.jsx'
import AnswerText from './components/AnswerText.jsx'
import 'primeicons/primeicons.css';


function App() {

  const [difficulty, setDifficulty] = useState("HitStand"); //State to hold which randomizer to use

  const [correct_answer, setAnswer] = useState("Hit"); // Correct answer for dealer/player pair, passed as state to component
  const [score, setScore] = useState([0, 1]); // first number is score, second number is total questions answered
  const [answered, setAnswered] = useState(false); //false means user has not submitted an answer
  const [correct_state, setCorrect_state] = useState(null); //true means user answered correctly, global state

  const renderHoleCard = () => {
    if (correct_state == null) {
      return (<i className="pi pi-eye-slash"></i>);
    }
    else if (correct_state == true) {
      return (<i className="pi pi-check"></i>);
    }
    else if (correct_state == false) {
      return (<i className="pi pi-times"></i>);
    }
  }

  //Generate new card set and answer
  //change the function inside useState depending on which randomizer you want to use
  const [randomizer, setRandomizer] = useState("HitStand"); //State to hold which randomizer function to use
  const [random, setRandom] = useState(HitStand()); //State to hold dealer/player pair
  console.log(random.answer);
  if (correct_answer != random.answer) {
    setAnswer(random.answer);
  }
  return (
    <div>

      <div className="dealer_block">

        <div className="hole_card card">
          {renderHoleCard()}
        </div>
        <div className={`dealer_card card ${(random.dealer_card_string).includes("♥") || (random.dealer_card_string).includes("♦") ? "heart_or_diamond" : "club_or_spade"}`}>{random.dealer_card_string}</div>

        <div className="dealer_title title">Dealer</div>
      </div>

      <div className="player_block">
        <div className={`player_card1 card ${(random.player_card1_string).includes("♥") || (random.player_card1_string).includes("♦") ? "heart_or_diamond" : "club_or_spade"}`}>{random.player_card1_string}</div>
        <div className={`player_card2 card ${(random.player_card2_string).includes("♥") || (random.player_card2_string).includes("♦") ? "heart_or_diamond" : "club_or_spade"}`}>{random.player_card2_string}</div>
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
        <Next toggle_answer={[answered, setAnswered]} score={score} setScore={setScore} setRandom={setRandom} setAnswer={setAnswer} setCorrect_state={setCorrect_state} randomizer={randomizer} />
      </div>
    
    </div>
    )
}

export default App
