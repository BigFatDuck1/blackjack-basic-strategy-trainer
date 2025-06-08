import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons.jsx'
import React from 'react'

function App() {

  const [buttonState, setButtonState] = useState();

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

      <Buttons currentState={buttonState} changeStateFunction={setButtonState} />
    </div>
    )
}

export default App
