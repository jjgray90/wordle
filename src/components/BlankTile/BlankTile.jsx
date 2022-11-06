import "./BlankTile.scss";

const BlankTile = ({ value, final, col, delay }) => {
  return (
    <div className="blank-tile">
      <div
        className={`blank-tile__inner ${final && `blank-tile__inner--flip`}`}
        style={{ transitionDelay: delay + "s" }}
      >
        <div
          className={`blank-tile__guess ${
            (value || final) && `blank-tile__guess--fill`
          }`}
        >
          <p className="blank-tile__value">{final ? final : value}</p>
        </div>
        <div className={`blank-tile__final blank-tile__final--${col}`}>
          <p className="blank-tile__value">{final}</p>
        </div>
      </div>
    </div>
  );
};

export default BlankTile;
