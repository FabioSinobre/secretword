import { useState } from 'react'
import './Game.css'

const Game = ({
    verifyLetter,
    pickedWord,
    pickedCategory,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score
}) => {
    const [letter, useLetter] = useState('')

    return(
       <div className='game'>
         <p className='points'>
            <span>Pontuação: {score} </span>
         </p>
         <h1>Adivinhe a Palavra: </h1>
         <h3 className='tip'>Dica da palavra: <span>{pickedCategory}</span></h3>
         <h4>Ainda restam {guesses} vidas</h4>

         <div className='wordConteiner'>
            {letters.map((letter, i) =>
                guessedLetters.includes(letter) ? (
                    <span kei={i} className='letter'>{letter} </span>
                ) : (
                    <span key={i} className='blankSquare'></span>
                )
            )}            
         </div>
         
         <div className='letterConteiner'>
            <p>Escolha uma letra para continuar?</p>
            <form>
                <input type="text" name='letter' maxLength='1' required />
                <button>Jogar</button>
            </form>
        </div>
            <div className='wrongLettersConteiner'>
                <p>Letras já utilizadas:</p>
                <span>a, </span>
                <span>b, </span>
            </div>
       </div>
    )
}

export default Game