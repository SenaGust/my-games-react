import React from "react";
import { useParams } from "react-router";
import { useStoreMap } from "effector-react";
import PageLayout from "../../components/PageLayout/PageLayout";
import GameStore from "../../stores/Games/GameStore";
import EditGameForm from "./components/editGameForm/EditGameForm";

interface RouteParams {
  id: string;
}

const EditGamesRoute: React.FunctionComponent = () => {
  const { id } = useParams<RouteParams>();
  const game = useStoreMap({
    store: GameStore,
    keys: [id],
    fn: (state) => state.games.find((game) => game.id === id),
  });

  return (
    <PageLayout title="Editar um jogo">
      {game && <EditGameForm initialValue={game} />}
    </PageLayout>
  );
};

export default EditGamesRoute;
