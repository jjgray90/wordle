import "./WordRow.scss";
import BlankTile from "../BlankTile/BlankTile";
import { useEffect, useState } from "react";

const WordRow = ({ value, final }) => {
  const [winner, setWinner] = useState(false);


  const checkWin = (arr) => {
    if (arr.every((obj) => obj.col === "green")) {
      setWinner(true);
    }
  };

  useEffect(() => {
    final && checkWin(final);
  }, [final]);

  return (
    <div className="word-row">
      <BlankTile
        value={value && value[0]}
        final={final && final[0].char}
        col={final && final[0].col}
        delay={final && final[0].delay}
        checkWin={winner}
      />
      <BlankTile
        value={value && value[1]}
        final={final && final[1].char}
        col={final && final[1].col}
        delay={final && final[1].delay}
        checkWin={winner}
      />
      <BlankTile
        value={value && value[2]}
        final={final && final[2].char}
        col={final && final[2].col}
        delay={final && final[2].delay}
        checkWin={winner}
      />
      <BlankTile
        value={value && value[3]}
        final={final && final[3].char}
        col={final && final[3].col}
        delay={final && final[3].delay}
        checkWin={winner}
      />
      <BlankTile
        value={value && value[4]}
        final={final && final[4].char}
        col={final && final[4].col}
        delay={final && final[4].delay}
        checkWin={winner}
      />
    </div>
  );
};

export default WordRow;
