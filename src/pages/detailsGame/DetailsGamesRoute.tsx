import React from "react";
import { useParams } from "react-router";
import { useStoreMap } from "effector-react";
import PageLayout from "../../components/PageLayout/PageLayout";
import GameStore from "../../stores/Games/GameStore";
import GameAllInformations from "./components/gameAllInformations/gameAllInformations";

interface RouteParams {
  id: string;
}

const DetailsGamesRoute: React.FunctionComponent = () => {
  const { id } = useParams<RouteParams>();
  const game = useStoreMap({
    store: GameStore,
    keys: [id],
    fn: (state) => state.games.find((game) => game.id === id),
  });

  return (
    <PageLayout title="Detalhes de um jogo">
      {game && <GameAllInformations game={game} />}
    </PageLayout>
  );
};

export default DetailsGamesRoute;
