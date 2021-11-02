import React from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import FilterGameForm from "./components/createGameForm/FilterGameForm";

const FilterGamesRoute: React.FunctionComponent = () => {
  return (
    <PageLayout title="Filtrar jogos">
      <FilterGameForm />
    </PageLayout>
  );
};

export default FilterGamesRoute;
