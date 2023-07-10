import './Game.css'

const Game = ({verifyLetter}) => {
    return(
       <div>
         <h3>Game</h3>
         <button onClick={verifyLetter}>Finalizar jogo</button>
       </div>
    )
}

export default Game