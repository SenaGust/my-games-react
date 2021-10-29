import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateGamesRoute from "./pages/createGame/CreateGamesRoute";
import DetailsGamesRoute from "./pages/detailsGame/DetailsGamesRoute";
import EditGamesRoute from "./pages/editGame/EditGamesRoute";
import FilterGamesRoute from "./pages/filterGames/FilterGamesRoute";
import ListGamesRoute from "./pages/listGames/ListGamesRoute";

function AppRouter(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ListGamesRoute} />
        <Route path="/create" component={CreateGamesRoute} />
        <Route path="/edit" component={EditGamesRoute} />
        <Route path="/filter" component={FilterGamesRoute} />
        <Route path="/details/:id" component={DetailsGamesRoute} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
