import React from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import AddIcon from "@material-ui/icons/Add";
import FilterListIcon from "@material-ui/icons/FilterList";

const ListGamesRoute: React.FunctionComponent = () => {
  const renderButtons = [
    { toUrl: "create", icon: AddIcon },
    { toUrl: "filter", icon: FilterListIcon },
  ];

  return (
    <PageLayout title="Listar jogos" isHomePage buttons={renderButtons}>
      <div>content</div>
    </PageLayout>
  );
};

export default ListGamesRoute;
