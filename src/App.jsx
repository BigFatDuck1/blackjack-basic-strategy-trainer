import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons.jsx'
import Random from './components/Random.jsx'
import React from 'react'

function App() {

  const [answer, setAnswer] = useState("Hit"); // Correct answer for dealer/player pair, passed as state to component
  const [score, setScore] = useState([0, 0]); // first number is score, second number is total questions answered

  if (answer != "Hit") {
    //TODO: hardcoded answer for now, need component to check answer later
    setAnswer("Hit");
  }

  Random(); //!Delete, for testing only

  return (
    <div>

      <div className="dealer_block">
        <div className="dealer_title">Dealer</div>
        <div className="hole_card card">Card 1 (Hole)</div>
        <div className="dealer_card card">Card 2 (Up)</div>
      </div>

      <div className="player_block">
        <div className="player_title">You</div>
        <div className="player_card1 card">Card 1</div>
        <div className="player_card2 card">Card 2</div>
      </div>

      <Buttons answer={answer} score_array={score} setScore={setScore} />
    </div>
    )
}

export default App
