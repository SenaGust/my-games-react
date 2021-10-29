import Game from "../../domains/Game";

interface GameState {
  isLoading: boolean;
  games: Array<Game>;
}

export default GameState;
