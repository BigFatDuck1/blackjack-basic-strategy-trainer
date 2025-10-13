import React from 'react'
import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons.jsx'
//Different set of questions depending on "difficulty" state
import Random from './components/Random.jsx'
import HitStand from './components/HitStand.jsx'
import HardTotal from './components/HardTotal.jsx'
import Hint from './components/Hint.jsx'

import Next from './components/Next.jsx'
import AnswerText from './components/AnswerText.jsx'
import 'primeicons/primeicons.css';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

function App() {

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
  const [dropdown, setDropdown] = useState("HitStand"); 
  const [randomizer, setRandomizer] = useState();
  //HitStand
  //HardTotal
  //SoftTotal
  //PairSplit
  //Random
  const randomizer_options = [
    { name: "Hit / Stand only"},
    { name: "Hard Totals only"},
    { name: "Any cards (Random)"},
  ]

  //Default randomizer function is Random()
  const [random, setRandom] = useState(HitStand()); //State to hold dealer/player pair

  if (correct_answer != random.answer) {
    setAnswer(random.answer);
  }

  //Hint when pressing on dealer hole card
  const [hint, showHint] = useState(false);
  
  return (
    <div>

      <div className='header'>
        <div className='logo_box'>
          <div className="logo">BST</div>
          <div className="logo_caption">Basic Strategy Trainer</div>
        </div>

          <div className="difficulty_box">
            <Dropdown value={dropdown} onChange={(e) =>  {

              switch (e.value.name) {
                case "Hit / Stand only":
                  setRandom(HitStand());
                  setRandomizer("HitStand");
                  break;
                case "Hard Totals only":
                  setRandom(HardTotal());
                  setRandomizer("HardTotal");
                  break;
                case "Any cards (Random)":
                  setRandom(Random());
                  setRandomizer("Random");
                  break;
                //TODO: add all cases
              }
              return setDropdown(e.value)
            }} options={randomizer_options} optionLabel="name" 
              placeholder="Select a card set " className="w-full md:w-14rem dropdown" tooltip="Default: Hit/Stand" 
              tooltipOptions={{ position: 'mouse', mouseTrack: true, mouseTrackTop: 15 }} />
        </div>
      </div>

      <div className="dealer_block">

        <div className="hole_card card" onClick={() => showHint(true)} >
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
        <div className="score_top_row">
          <p className="score_text">Score: {score[0]} / {score[1]}</p>
          <Button icon="pi pi-replay" className="reset_score_button" ripple aria-label="Reset" onClick={() => setScore([0, 1])} />
        </div>
        <p className="score_text"> {(score[0] / score[1] * 100).toFixed(2)}%</p>
      </div>

      <div className="next_button_box">
        <Next toggle_answer={[answered, setAnswered]} score={score} setScore={setScore} setRandom={setRandom} setAnswer={setAnswer} setCorrect_state={setCorrect_state} randomizer={randomizer} />
      </div>

      < Hint id="hint_dialog" hint={hint} showHint={showHint} which_hint={randomizer} />

    
    </div>
    )
}

export default App
