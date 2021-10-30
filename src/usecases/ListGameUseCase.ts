import Game from "../domains/Game";
import listGames from "../services/ListGames";
import { startListDone, startListGames } from "../stores/Games/GameEvents";

const EditGameUseCase = (id: string, gameToBeEdited: Game) => {
  startListGames();

  try {
    const games = listGames();
    startListDone({ gamesToBeAdded: games });
  } catch (error) {
    console.error("error", error);
  }
};

export default EditGameUseCase;
