import GameFilter from "../../domains/GameFilter";

const addQueryParamsToURL = (gameFilters: Array<GameFilter>, history, location) => {
  const newURL = gameFilters.map((gameFilter) => {
    return `filterBy(${gameFilter.filterBy})=${gameFilter.value}`;
  });

  history.replace({ pathname: location.pathname, search: newURL.join('&') });       
};

export default addQueryParamsToURL;
