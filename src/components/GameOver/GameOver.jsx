import "./GameOver.scss";

const GameOver = ({ word, loser }) => {
  return (
    <div className={`game-over  ${loser && `game-over--show`}`}>
      <p className="game-over__text">{word}</p>
    </div>
  );
};

export default GameOver;
