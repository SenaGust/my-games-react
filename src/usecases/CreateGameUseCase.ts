import Game from "../domains/Game";
import createGame from "../services/createGame";
import { createGameDone } from "../stores/Games/GameEvents";

const CreateGameUseCase = (gameToBeAdded: Game) => {
  try {
    createGame(gameToBeAdded);
    createGameDone({ gameToBeAdded });
  } catch (error) {
      console.error('error', error)
  }
};

export default CreateGameUseCase;
