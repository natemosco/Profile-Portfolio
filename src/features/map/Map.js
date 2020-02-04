import React from "react";
import { connect } from "react-redux";
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
    />
  );
}
function mapStateToProps(state) {
  return {
    ...state
  };
}
export default connect(mapStateToProps, {})(MainMap);
