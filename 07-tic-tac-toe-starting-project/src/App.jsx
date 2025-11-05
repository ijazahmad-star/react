import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const InitialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = [...InitialGameBoard.map( (arr) => [...arr])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    // console.log(square);

    const { row, col } = square;
    gameBoard[row][col] = player;
  }
   let winner;
  for (const comb of WINNING_COMBINATIONS){
    const firstSqSymbol = gameBoard[comb[0].row][comb[0].column];
    const secondSqSymbol = gameBoard[comb[1].row][comb[1].column];
    const thirdSqSymbol = gameBoard[comb[2].row][comb[2].column];

    if(firstSqSymbol && firstSqSymbol === secondSqSymbol && firstSqSymbol === thirdSqSymbol){
      winner = firstSqSymbol;
    }
  }
  const hasDraw = gameTurns.length === 9 && !winner;
  function handleSelectedSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      // console.log(updatedTurns)
      return updatedTurns;
    });
  }
  function handleRestart(){
    setGameTurns([])
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <GameBoard
          onSelectedSquare={handleSelectedSquare}
          Board={gameBoard}
        />
      </div>
      <Log Turns={gameTurns} />
    </main>
  );
}

export default App;
