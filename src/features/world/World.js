import React from "react";
import Player from "../player/Player";
import Map from "../map/Map";

function World() {
  return (
    <div
      style={{
        position: "relative",
        width: "800px",
        height: "400px",
        margin: "20px auto"
      }}
    >
      <Map></Map>
      <Player></Player>
    </div>
  );
}

export default World;
