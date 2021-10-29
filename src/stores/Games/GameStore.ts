import { createStore } from "effector";
import { cloneDeep } from "lodash";
import {
  startListGames,
  startListDone,
  startListFailed,
  createGameDone,
  editGameDone,
  deleteGameDone,
} from "./GameEvents";
import GameState from "./GameState";

const initialState: GameState = {
  isLoading: false,
  games: [],
};

const GameStore = createStore(initialState)
  .on(startListGames, (state) => {
    const newState = cloneDeep(state);

    newState.isLoading = false;

    return newState;
  })
  .on(startListDone, (state, { gamesToBeAdded }) => {
    const newState = cloneDeep(state);

    newState.isLoading = true;
    newState.games = gamesToBeAdded;

    return newState;
  })
  .on(startListFailed, (state) => {
    const newState = cloneDeep(state);

    newState.isLoading = false;

    return newState;
  })
  .on(createGameDone, (state, { gameToBeAdded }) => {
    const newState = cloneDeep(state);

    newState.games.push(gameToBeAdded);

    return newState;
  })
  .on(editGameDone, (state, { gameIdToBeEdited, gameToBeAdded }) => {
    const newState = cloneDeep(state);

    newState.games = newState.games.map((game) => {
      if (game.id === gameIdToBeEdited) {
        return gameToBeAdded;
      }

      return game;
    });

    return newState;
  })
  .on(deleteGameDone, (state, { gameId }) => {
    const newState = cloneDeep(state);

    newState.games = newState.games.filter(({ id }) => id !== gameId);

    return newState;
  });

export default GameStore;
