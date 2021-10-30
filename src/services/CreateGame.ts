import Game from "../domains/Game";

const createGame = (game: Game) => {
  const games = localStorage.getItem("games")
    ? JSON.parse(localStorage.getItem("games") as string)
    : [];

    games.push(game);

  localStorage.setItem("games", JSON.stringify(games));
};

export default createGame;
