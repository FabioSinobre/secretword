import './StartScreen.css'

const StartScreen = ({startGame}) =>{
    return(
        <div className='start'>
            <h1>Palavra Secreta!</h1>
            <p>Clique no botão abaixo para começar o jogar</p>
            <button onClick={startGame}>Jogar</button>
        </div>
    )
}

export default StartScreen