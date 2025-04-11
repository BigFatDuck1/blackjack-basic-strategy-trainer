//import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div>

      <div className="dealer_block">
        <div className="dealer_title">Dealer</div>
        <div className="hole_card">Card 1 (Hole)</div>
        <div className="dealer_card">Card 2 (Up)</div>
      </div>

      <div className="player_block">
        <div className="player_title">You</div>
        <div className="player_card1">Card 1</div>
        <div className="player_card2">Card 2</div>
      </div>

      <div className="options">
        <div className="hit option_box">Hit</div>
        <div className="stand option_box">Stand</div>
        <div className="split option_box">Split</div>
        <div className="double option_box">Double</div>
      </div>
    </div>
    )
}

export default App
