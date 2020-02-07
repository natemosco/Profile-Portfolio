import React from "react";
import { connect } from "react-redux";

function getTileSprite(type) {
  switch (type) {
    case 0:
      break;

    default:
      break;
  }
}

function MapTile(props) {
  return <div className="tile">{props.tile}</div>;
}

function MapRow(props) {
  return (
    <div className="row">
      {props.row.map(tile => (
        <MapTile tile={tile} />
      ))}
    </div>
  );
}

function MainMap(props) {
  return (
    <div
      style={{
        position: "relative",
        top: "0px",
        left: "0px",
        width: "800px",
        height: "400px",
        backgroundColor: "green",
        border: " 4px solid white"
      }}
    >
      {props.matrix.map(row => (
        <MapRow row={row} />
      ))}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    ...state
  };
}
export default connect(mapStateToProps, {})(MainMap);
