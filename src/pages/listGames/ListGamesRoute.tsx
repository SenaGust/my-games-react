import React from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import FilterListIcon from "@material-ui/icons/FilterList";
import useListGamesRouteStyles from "./ListGamesRoute.styles";

const ListGamesRoute: React.FunctionComponent = () => {
  const { svgIcon } = useListGamesRouteStyles();

  const renderButtons = (
    <>
      <IconButton>
        <AddIcon className={svgIcon} />
      </IconButton>
      <IconButton>
        <FilterListIcon className={svgIcon} />
      </IconButton>
    </>
  );

  return (
    <PageLayout title="Listar jogos" isHomePage buttons={renderButtons}>
      <div>content</div>
    </PageLayout>
  );
};

export default ListGamesRoute;
