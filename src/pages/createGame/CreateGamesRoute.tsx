import React from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import CreateGameForm from "./components/createGameForm/CreateGameForm";

const CreateGamesRoute: React.FunctionComponent = () => {
  return (
    <PageLayout title="Criar um jogo">
      <CreateGameForm />
    </PageLayout>
  );
};

export default CreateGamesRoute;
