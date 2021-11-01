import DeleteGame from "../services/DeleteGames";
import { deleteGameDone } from "../stores/Games/GameEvents";

const DeleteGameUseCase = (id: string) => {
  try {
    DeleteGame(id);
    deleteGameDone({ gameId: id });
  } catch (error) {
    console.error("error", error);
  }
};

export default DeleteGameUseCase;
