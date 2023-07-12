// Data
import { wordsList } from './Data/words';
// CSS
import './App.css';
//React hockes
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

  const [pickedCategory, setPickedCategory] = useState('')
  const [pickedWord, setPickedWord] = useState('')
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetter] = useState([])
  const [wrongLetters, setWrongLetter] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const pickedWordAndCategory = () =>{
    //pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random()*Object.keys(categories).length)]
 
    console.log(category)

    //pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    console.log(word)
    return{word, category}
  }

  // start the secret word game
  const startGame = () => {
    const {word, category} = pickedWordAndCategory()

    // create an array of letters
    let wordLetters = word.split('')
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    console.log(word, category)
    console.log(wordLetters)

    //fill startes
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

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
        {gameStage === "game" && <Game 
          verifyLetter={verifyLetter} 
          pickedWord={pickedWord} 
          pickedCategory={pickedCategory} 
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />}
        {gameStage === "end" && <GameOver retry={retry}/>}
    </div>
    </>
  );
}

export default App;
