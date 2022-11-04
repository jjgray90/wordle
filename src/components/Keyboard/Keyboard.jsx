import "./Keyboard.scss";
import KeyTile from "../KeyTile/KeyTile";

const Keyboard = () => {
  return (
    <div className="keyboard">
      <div className="keyboard__row">
        <KeyTile value="Q" />
        <KeyTile value="W" />
        <KeyTile value="E" />
        <KeyTile value="R" />
        <KeyTile value="T" />
        <KeyTile value="Y" />
        <KeyTile value="U" />
        <KeyTile value="I" />
        <KeyTile value="O" />
        <KeyTile value="P" />
      </div>

      <div className="keyboard__row">
        <KeyTile value="A" />
        <KeyTile value="S" />
        <KeyTile value="D" />
        <KeyTile value="F" />
        <KeyTile value="G" />
        <KeyTile value="H" />
        <KeyTile value="J" />
        <KeyTile value="K" />
        <KeyTile value="L" />
      </div>

      <div className="keyboard__row">
        <KeyTile symbol={true} value="ENTER" />
        <KeyTile value="Z" />
        <KeyTile value="X" />
        <KeyTile value="C" />
        <KeyTile value="V" />
        <KeyTile value="B" />
        <KeyTile value="N" />
        <KeyTile value="M" />
        <KeyTile symbol={true} value="DEL" />
      </div>
    </div>
  );
};

export default Keyboard;
