import Game from "../domains/Game";

const EditGame = (id: string, gameEdited: Game) => {
  const games = localStorage.getItem("games")
    ? JSON.parse(localStorage.getItem("games") as string)
    : [];

  const updatedGames = games.map((game: Game) => {
    if (game.id === id) {
      return gameEdited;
    }


    return game;
  });

  localStorage.setItem("games", JSON.stringify(updatedGames));
};

export default EditGame;
