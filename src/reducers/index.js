import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
// import { } from "../actions";

import playerReducer from "../features/player/playerReducer";

const rootReducer = combineReducers({
  player: playerReducer
});

let store;
let middleware;

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  middleware = [thunk, logger];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(...middleware));
  store = createStore(
    rootReducer,
    {
      /*preloaded state */
    },
    enhancer
  );
} else {
  store = createStore(
    rootReducer,
    {
      /*preloaded state */
    },
    applyMiddleware(thunk, logger)
  );
}

export { store };
