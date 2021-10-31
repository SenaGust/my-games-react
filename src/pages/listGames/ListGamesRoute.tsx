import React from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import AddIcon from "@material-ui/icons/Add";
import FilterListIcon from "@material-ui/icons/FilterList";
import SearchGames from "./components/searchGames/SearchGames";
import GameListItem from "./components/GameListItem/GameListItem";
import GameStatusEnum from "../../domains/GameStatusEnum";
import GameCategoryEnum from "../../domains/GameCategoryEnum";

const ListGamesRoute: React.FunctionComponent = () => {
  const renderButtons = [
    { toUrl: "create", icon: AddIcon },
    { toUrl: "filter", icon: FilterListIcon },
  ];

  return (
    <PageLayout title="Listar jogos" isHomePage buttons={renderButtons}>
      <SearchGames />
      <GameListItem
        game={{
          description: "description",
          id: "id",
          initialDate: new Date(),
          name: "name",
          rating: 2,
          status: GameStatusEnum.FINISHED,
          type: GameCategoryEnum.ACTION,
        }}
      />
    </PageLayout>
  );
};

export default ListGamesRoute;
