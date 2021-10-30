import Game from "../domains/Game";

const ListGames = (): Array<Game> => {
  const games = localStorage.getItem("games");

  if (games) {
    return JSON.parse(localStorage.getItem("games") as string);
  }

  return [];
};

export default ListGames;
