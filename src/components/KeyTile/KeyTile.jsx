import "./KeyTile.scss";
import { useContext, useState, useEffect } from "react";
import WordContext from "../../context/WordContext";

const KeyTile = ({ value, symbol, onClick }) => {
  const { usedLetters } = useContext(WordContext);
  const [tileCol, setTileCol] = useState();

  const checkUsedLetters = (charArr, value) => {
    const filteredArr = charArr.filter((char) => char.char === value);
    const colArr = filteredArr.map((obj) => obj.col);

    if (colArr.includes("green")) {
      return "green";
    } else if (colArr.includes("yellow")) {
      return "yellow";
    } else if (colArr.includes("grey")) {
      return "grey";
    }
  };

  useEffect(() => {
    setTimeout(() => setTileCol(checkUsedLetters(usedLetters, value)), 1200);
  }, [usedLetters, value]);



  return (
    <div
      onClick={onClick}
      className={`key-tile ${
        symbol ? `key-tile--symbol` : `key-tile--${tileCol}`
      }`}
    >
      <p>{value}</p>
    </div>
  );
};

export default KeyTile;
