import Game from "../domains/Game";

const deleteGame = (id: string) => {
  let games = localStorage.getItem("games")
    ? JSON.parse(localStorage.getItem("games") as string)
    : [];

  const updatedGames = games.filter((game: Game) => game.id !== id);

  localStorage.setItem("games", JSON.stringify(updatedGames));
};

export default deleteGame;
