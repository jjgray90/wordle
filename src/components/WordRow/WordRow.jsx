import "./WordRow.scss";
import BlankTile from "../BlankTile/BlankTile";

const WordRow = ({ value, final }) => {
  return (
    <div className="word-row">
      <BlankTile
        value={value && value[0]}
        final={final && final[0].char}
        col={final && final[0].col}
        delay={final && final[0].delay}
      />
      <BlankTile
        value={value && value[1]}
        final={final && final[1].char}
        col={final && final[1].col}
        delay={final && final[1].delay}
      />
      <BlankTile
        value={value && value[2]}
        final={final && final[2].char}
        col={final && final[2].col}
        delay={final && final[2].delay}
      />
      <BlankTile
        value={value && value[3]}
        final={final && final[3].char}
        col={final && final[3].col}
        delay={final && final[3].delay}
      />
      <BlankTile
        value={value && value[4]}
        final={final && final[4].char}
        col={final && final[4].col}
        delay={final && final[4].delay}
      />
    </div>
  );
};

export default WordRow;
