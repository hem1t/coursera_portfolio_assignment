import { useEffect, useReducer, useState } from "react";
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

function board_reducer(boards, action) {
  let [b1, b2, b3, b4] = boards;
  switch (action.board) {
    case 0:
      b1[action.pos] = action.val;
      return [[...b1], [...b2], [...b3], [...b4]];
    case 1:
      b2[action.pos] = action.val;
      return [[...b1], [...b2], [...b3], [...b4]];
    case 2:
      b3[action.pos] = action.val;
      return [[...b1], [...b2], [...b3], [...b4]];
    case 3:
      b4[action.pos] = action.val;
      return [[...b1], [...b2], [...b3], [...b4]];
  }
}

const RapidXO = () => {
  // 0: default start
  // 1: player
  // 2: computer
  // 3: Result
  let [gameState, setGameState] = useState(3);
  let [boards, do_on_boards] = useReducer(board_reducer, [
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
  ]);

  useEffect(() => {
    // TODO: code which plays every 3 seconds

  }, gameState);

  return (
    <div className="full-page">
      <div className="rapid-xo-component">
        {boards.map((board, i) => (
          <XOBoard
            board={board}
            key={i}
            onCellClick={(k) => {
              do_on_boards({ board: i, pos: k, val: "X" });
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RapidXO;
