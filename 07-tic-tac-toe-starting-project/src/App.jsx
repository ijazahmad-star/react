
import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
    const [activePlayer, setActivePlayer] = useState('X')
    function handleSelectedSquare(){
      setActivePlayer( (currPlayer) => currPlayer === 'X'? 'O': 'X')
    }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initName="Player 2" symbol= "O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectedSquare={handleSelectedSquare} onActivePlayerSymbol={activePlayer}/>
      </div>
    </main>
  );
}

export default App;
