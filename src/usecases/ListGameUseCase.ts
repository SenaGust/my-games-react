import listGames from "../services/ListGames";
import { startListDone, startListGames } from "../stores/Games/GameEvents";

const ListGameUseCase = () => {
  startListGames();

  try {
    const games = listGames();
    startListDone({ gamesToBeAdded: games });
  } catch (error) {
    console.error("error", error);
  }
};

export default ListGameUseCase;
