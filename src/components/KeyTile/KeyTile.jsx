import "./KeyTile.scss";

const KeyTile = ({ value, symbol, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`key-tile ${symbol && `key-tile--symbol`}`}
    >
      <p>{value}</p>
    </div>
  );
};

export default KeyTile;
