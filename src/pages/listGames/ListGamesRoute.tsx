import React, { useEffect } from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import AddIcon from "@material-ui/icons/Add";
import FilterListIcon from "@material-ui/icons/FilterList";
import SearchGames from "./components/searchGames/SearchGames";
import GameList from "./components/GameList/GameList";
import ListGameUseCase from "../../usecases/ListGameUseCase";

const ListGamesRoute: React.FunctionComponent = () => {
  const renderButtons = [
    { toUrl: "create", icon: AddIcon },
    { toUrl: "filter", icon: FilterListIcon },
  ];

  useEffect(() => {
    ListGameUseCase();
  });

  return (
    <PageLayout title="Listar jogos" isHomePage buttons={renderButtons}>
      <SearchGames />
      <GameList />
    </PageLayout>
  );
};

export default ListGamesRoute;
