import Game from "../domains/Game";
import editGame from "../services/editGame";
import { editGameDone } from "../stores/Games/GameEvents";

const EditGameUseCase = (id: string, gameToBeEdited: Game) => {
  try {
    editGame(id, gameToBeEdited);
    editGameDone({ gameToBeAdded: gameToBeEdited, gameIdToBeEdited: id });
  } catch (error) {
    console.error("error", error);
  }
};

export default EditGameUseCase;
