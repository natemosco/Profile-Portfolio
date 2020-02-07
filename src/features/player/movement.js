import { store } from "../../reducers/index";
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from "../../reducers/constants";
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
  function observeBoundaries(oldPos, newPos) {
    return newPos[0] >= 0 &&
      newPos <= MAP_WIDTH - SPRITE_SIZE &&
      newPos[1] >= 0 &&
      newPos[1] <= MAP_HEIGHT - SPRITE_SIZE
      ? newPos
      : oldPos;
  }
  function dispatchMove(direction) {
    const oldPos = store.getState().player.position;
    store.dispatch({
      type: "MOVE_PLAYER",
      payload: {
        position: observeBoundaries(oldPos, getNewPosition(direction))
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
