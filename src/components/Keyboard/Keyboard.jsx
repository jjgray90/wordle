import "./Keyboard.scss";
import KeyTile from "../KeyTile/KeyTile";
import { useContext } from "react";
import WordContext from "../../context/WordContext";

const Keyboard = () => {
  const { handleUpdateGuessWord, handleBackspace, handleSubmit } =
    useContext(WordContext);

  return (
    <div className="keyboard">
      <div className="keyboard__row">
        <KeyTile onClick={() => handleUpdateGuessWord("Q")} value="Q" />
        <KeyTile onClick={() => handleUpdateGuessWord("W")} value="W" />
        <KeyTile onClick={() => handleUpdateGuessWord("E")} value="E" />
        <KeyTile onClick={() => handleUpdateGuessWord("R")} value="R" />
        <KeyTile onClick={() => handleUpdateGuessWord("T")} value="T" />
        <KeyTile onClick={() => handleUpdateGuessWord("Y")} value="Y" />
        <KeyTile onClick={() => handleUpdateGuessWord("U")} value="U" />
        <KeyTile onClick={() => handleUpdateGuessWord("I")} value="I" />
        <KeyTile onClick={() => handleUpdateGuessWord("O")} value="O" />
        <KeyTile onClick={() => handleUpdateGuessWord("P")} value="P" />
      </div>

      <div className="keyboard__row">
        <KeyTile onClick={() => handleUpdateGuessWord("A")} value="A" />
        <KeyTile onClick={() => handleUpdateGuessWord("S")} value="S" />
        <KeyTile onClick={() => handleUpdateGuessWord("D")} value="D" />
        <KeyTile onClick={() => handleUpdateGuessWord("F")} value="F" />
        <KeyTile onClick={() => handleUpdateGuessWord("G")} value="G" />
        <KeyTile onClick={() => handleUpdateGuessWord("H")} value="H" />
        <KeyTile onClick={() => handleUpdateGuessWord("J")} value="J" />
        <KeyTile onClick={() => handleUpdateGuessWord("K")} value="K" />
        <KeyTile onClick={() => handleUpdateGuessWord("L")} value="L" />
      </div>

      <div className="keyboard__row">
        <KeyTile onClick={() => handleSubmit()} symbol={true} value="ENTER" />
        <KeyTile onClick={() => handleUpdateGuessWord("Z")} value="Z" />
        <KeyTile onClick={() => handleUpdateGuessWord("X")} value="X" />
        <KeyTile onClick={() => handleUpdateGuessWord("C")} value="C" />
        <KeyTile onClick={() => handleUpdateGuessWord("V")} value="V" />
        <KeyTile onClick={() => handleUpdateGuessWord("B")} value="B" />
        <KeyTile onClick={() => handleUpdateGuessWord("N")} value="N" />
        <KeyTile onClick={() => handleUpdateGuessWord("M")} value="M" />
        <KeyTile onClick={() => handleBackspace()} symbol={true} value="DEL" />
      </div>
    </div>
  );
};

export default Keyboard;
