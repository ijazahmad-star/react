import { useState } from "react";

const InitialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectedSquare, onActivePlayerSymbol}) {
  const [gameBoard, setGameBoard] = useState(InitialGameBoard);

  function hanldeGameBoard(rindx, cindx) {
    setGameBoard( (preGameBoard) => {
        const updatedGameBoard = [...preGameBoard.map( (innerArr) => [...innerArr])];
        updatedGameBoard[rindx][cindx] = onActivePlayerSymbol;
        return updatedGameBoard;
    })
    onSelectedSquare();
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rindx) => (
        <li key={rindx}>
          <ol>
            {row.map((playerSymbol, cindx) => (
              <li key={cindx}>
                <button onClick={ () => hanldeGameBoard(rindx, cindx)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
