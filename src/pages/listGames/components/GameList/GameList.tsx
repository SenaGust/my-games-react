import React from "react";
import { useStoreMap } from "effector-react";
import GameStore from "../../../../stores/Games/GameStore";
import GameListItem from "../GameListItem/GameListItem";
import useGameFilter from "../../../../hooks/useGameFilter/useGameFilter";
import GameFilterByEnum from "../../../../domains/GameFilterByEnum";
import useGameListStyles from "./GameList.styles";

const GameList: React.FunctionComponent = () => {
  const gameFilters = useGameFilter();
  const { container } = useGameListStyles();
  const games = useStoreMap({
    store: GameStore,
    keys: [gameFilters],
    fn: (state) =>
      state.games.filter((game) => {
        if (gameFilters) {
          return !gameFilters
            .map((gameFilter) => {
              if (gameFilter.filterBy === GameFilterByEnum.NAME) {
                return game.name.includes(gameFilter.value as string);
              }
              if (gameFilter.filterBy === GameFilterByEnum.STATUS) {
                return game.status === gameFilter.value;
              }
              if (gameFilter.filterBy === GameFilterByEnum.RATING) {
                return game.rating >= gameFilter.value;
              }
              if (gameFilter.filterBy === GameFilterByEnum.TYPE) {
                return game.type === gameFilter.value;
              }
              return true;
            })
            .includes(false);
        }

        return true;
      }),
  });

  return (
    <div className={container}>
      {games.map((game) => (
        <GameListItem game={game} key={`game-id:${game.id}`} />
      ))}
    </div>
  );
};

export default GameList;
