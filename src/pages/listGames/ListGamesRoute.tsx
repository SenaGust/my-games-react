import React from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import AddIcon from "@material-ui/icons/Add";
import FilterListIcon from "@material-ui/icons/FilterList";
import SearchGames from "./components/searchGames/SearchGames";

const ListGamesRoute: React.FunctionComponent = () => {
  const renderButtons = [
    { toUrl: "create", icon: AddIcon },
    { toUrl: "filter", icon: FilterListIcon },
  ];

  return (
    <PageLayout title="Listar jogos" isHomePage buttons={renderButtons}>
      <SearchGames />
    </PageLayout>
  );
};

export default ListGamesRoute;
