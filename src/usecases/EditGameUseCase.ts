import Game from "../domains/Game";
import EditGame from "../services/EditGame";
import { editGameDone } from "../stores/Games/GameEvents";

const EditGameUseCase = (id: string, gameToBeEdited: Game) => {
  try {
    EditGame(id, gameToBeEdited);
    editGameDone({ gameToBeAdded: gameToBeEdited, gameIdToBeEdited: id });
  } catch (error) {
    console.error("error", error);
  }
};

export default EditGameUseCase;
