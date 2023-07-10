// Data
import { wordsList } from './Data/words';
// CSS
import './App.css';
//React
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

// components
import StartScreen from './componet/StartScreen';
import Game from './componet/Game';
import GameOver from './componet/GameOver';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  // start the secret word game
  const startGame = () => {
    setGameStage(stages[1].name)
  }

  // process the letter input
  const verifyLetter = () =>{
    setGameStage(stages[2].name)
  }

  // restart the game
  const retry = () =>{
    setGameStage(stages[0].name)
  }

  return (
    <>
    <div className='app'>
        {gameStage === "start" && <StartScreen startGame={startGame}/>}
        {gameStage === "game" && <Game verifyLetter={verifyLetter}/>}
        {gameStage === "end" && <GameOver retry={retry}/>}
    </div>
    </>
  );
}

export default App;
