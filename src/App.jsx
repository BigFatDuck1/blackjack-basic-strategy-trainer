import { useState } from 'react'
import { useContext } from 'react'
import  scoreContext from './components/Scores.jsx'
import './App.css'
import Buttons from './components/Buttons.jsx'
import React from 'react'

function App() {

  const [answer, setAnswer] = useState("Hit"); // Correct answer for dealer/player pair, passed as state to component

  if (answer != "Hit") {
    setAnswer("Hit");
  }

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

      <Buttons answer={answer} score={useContext(scoreContext)} />
    </div>
    )
}

export default App
