import "./WordGrid.scss";
import WordRow from "../WordRow/WordRow";

const WordGrid = () => {
  return (
    <div className="word-grid">
      <WordRow />
      <WordRow />
      <WordRow />
      <WordRow />
      <WordRow />
      <WordRow />
    </div>
  );
};

export default WordGrid;
