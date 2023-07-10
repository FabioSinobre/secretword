import './Game.css'

const Game = ({verifyLetter}) => {
    return(
       <div className='game'>
         <p className='points'>
            <span>Pontuação: 0000</span>
         </p>
         <h1>Adivinhe a Palavra: </h1>
         <h3 className='tip'>Dica da palavra: <span>Dica ...</span></h3>
         <div className='wordConteiner'>
            <span className='letter'> A</span>
            <span className='letter'> a</span>
            <span className='blankSquare'></span>
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