import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows = 4, ncols = 4, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    // TODO: create array-of-arrays of true/false values
    for (let x = 0; x < ncols; x++) {
      initialBoard[x] = [];
      for (let y = 0; y < nrows; y++) {
        initialBoard[x][y] = Boolean(Math.floor(Math.random() * 2));
      }
    }

    return initialBoard;
  }

  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
    if (board.every((row) => row.every((cell) => cell === true))) {
      return true;
    } else {
      return false;
    }
  }

  function flipCellsAround(coord) {
    setBoard((oldBoard) => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard
      let deepCopy = oldBoard.map((row) => [...row]);
      // TODO: in the copy, flip this cell and the cells around it
      flipCell(y, x, deepCopy);
      flipCell(y, x - 1, deepCopy);
      flipCell(y, x + 1, deepCopy);
      flipCell(y - 1, x, deepCopy);
      flipCell(y + 1, x, deepCopy);

      // TODO: return the copy
      return deepCopy;
    });
  }

  // if the game is won, just show a winning msg & render nothing else

  if (hasWon() === true) {
    return <h1>You have won! </h1>;
  } else {
    return (
      <table>
        <tbody>
          {board.map((col, x) => (
            <tr key={x}>
              {col.map((row, y) => (
                <Cell
                  key={`${x}-${y}`}
                  flipCellsAroundMe={() => flipCellsAround(`${x}-${y}`)}
                  isLit={row}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  // TODO

  // make table board

  // TODO
}

export default Board;
