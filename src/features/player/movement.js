import { store } from "../../reducers/index";
import { SPRITE_SIZE } from "../../reducers/constants";
export default function handleMovement(player) {
  function getNewPosition(direction) {
    const oldPos = store.getState().player.position;
    if (direction == "WEST") {
      return [oldPos[0] - SPRITE_SIZE, oldPos[1]];
    } else if (direction == "NORTH") {
      return [oldPos[0], oldPos[1] - SPRITE_SIZE];
    } else if (direction == "EAST") {
      return [oldPos[0] + SPRITE_SIZE, oldPos[1]];
    } else if (direction == "SOUTH") {
      return [oldPos[0], oldPos[1] + SPRITE_SIZE];
    }
  }
  function dispatchMove(direction) {
    store.dispatch({
      type: "MOVE_PLAYER",
      payload: {
        position: getNewPosition(direction)
      }
    });
  }

  function handleKeyDown(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case 37:
        return dispatchMove("WEST");
      case 38:
        return dispatchMove("NORTH");
      case 39:
        return dispatchMove("EAST");
      case 40:
        return dispatchMove("SOUTH");
      default:
        break;
    }
  }

  window.addEventListener("keydown", e => {
    handleKeyDown(e);
  });
  return player;
}
