import React from "react";
import { useStoreMap } from "effector-react";
import GameStore from "../../../../stores/Games/GameStore";
import GameListItem from "../GameListItem/GameListItem";

const GameList: React.FunctionComponent = () => {
  const games = useStoreMap({
    store: GameStore,
    keys: [],
    fn: (state) => state.games,
  });

  return (
    <div>
      {games.map((game) => (
        <GameListItem game={game} />
      ))}
    </div>
  );
};

export default GameList;
