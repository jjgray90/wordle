import "./WordGrid.scss";
import WordRow from "../WordRow/WordRow";
import {  useContext } from "react";
import WordContext from "../../context/WordContext";

const WordGrid = () => {
  const {
    guessWord,
    rowOne,
    rowTwo,
    rowThree,
    rowFour,
    rowFive,
    rowSix,
    rowNum,
  } = useContext(WordContext);

  return (
    <div className="word-grid">
      <WordRow
        value={rowNum === 1 && guessWord}
        final={rowOne}
      />
      <WordRow
        value={rowNum === 2 && guessWord}
        final={rowTwo}
      />
      <WordRow
        value={rowNum === 3 && guessWord}
        final={rowThree}
      />
      <WordRow
        value={rowNum === 4 && guessWord}
        final={rowFour}
      />
      <WordRow
        value={rowNum === 5 && guessWord}
        final={rowFive}
      />
      <WordRow
        value={rowNum === 6 && guessWord}
        final={rowSix}
      />
    </div>
  );
};

export default WordGrid;
