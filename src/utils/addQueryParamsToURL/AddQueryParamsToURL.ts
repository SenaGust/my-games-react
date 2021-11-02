import GameFilter from "../../domains/GameFilter";

const addQueryParamsToURL = (
  gameFilters: Array<GameFilter>,
  history,
  location,
  newPathname?: string
) => {
  const newURL = gameFilters.map((gameFilter) => {
    return `filterBy[${gameFilter.filterBy}]=${gameFilter.value}`;
  });

  history.replace({
    pathname: newPathname ?? location.pathname,
    search: newURL.join("&"),
  });
};

export default addQueryParamsToURL;
