import "./KeyTile.scss";

const KeyTile = ({ value, symbol }) => {
  return (
    <div className={`key-tile ${symbol && `key-tile--symbol`}`}>
      <p>{value}</p>
    </div>
  );
};

export default KeyTile;
