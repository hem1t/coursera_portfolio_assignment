import { useReducer, useState } from "react";
import "./RapidXO.css";

const XOBoard = ({ board, onCellClick }) => {
  return (
    <div className="xo-board">
      {board.map((val, i) => (
        <div
          className="xo-board-cell"
          key={i}
          onClick={() => {
            onCellClick(i);
          }}
        >
          {val}
        </div>
      ))}
    </div>
  );
};

// action:
// {
//    board: 0 | 1 | 2,
//    pos: 0 - 9,
//    val: X | O
// }

function board_reducer(boards, action) {}

const RapidXO = () => {
  // 0, haven't started.
  // 1, user is playing.
  // 2, computer is playing.
  // 3, result state.

  let [] = useState(0);
  let [boards, do_on_boards] = useReducer(board_reducer, [
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
  ]);

  return (
    <div className="full-page">
      <div className="rapid-xo-component">
        {boards.map((board, i) => (
          <XOBoard
            board={board}
            key={i}
            onCellClick={(k) => {
              console.log("Clicked: ", k + " from " + i);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RapidXO;
