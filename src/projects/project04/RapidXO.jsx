import "./RapidXO.css";

const XOBoard = ({ board }) => {
  return (
    <div className="xo-board">
      {board.map((val, i) => (
        <div className="xo-board-cell" key={i}>
          {val}
        </div>
      ))}
    </div>
  );
};

const RapidXO = () => {
  return (
    <div className="full-page">
      <div className="rapid-xo-page">
        <XOBoard board={["1", "1", "1", "1", "1", "1", "1", "1", "1"]} />
      </div>
    </div>
  );
};

export default RapidXO;
