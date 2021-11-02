import { useLocation } from "react-router-dom";
import GameFilter from "../../domains/GameFilter";
import GameFilterByEnum from "../../domains/GameFilterByEnum";

const allGameFilterByEnum = Object.values(GameFilterByEnum);
const regexPattern = /filterBy\[(\w+)\]=([\w'%]+)'/gim;
export default function useGameFilter(): Array<GameFilter> {
  const location = useLocation();
  const searchQuery = (location.search.substring(1));

  const allResultRegex = [...searchQuery.matchAll(regexPattern)];

  const gameFilters = allResultRegex.map(([, filterBy, value]) => ({ filterBy: filterBy as GameFilterByEnum, value: decodeURI(value) }));

  return gameFilters.filter(gameFilter => allGameFilterByEnum.includes(gameFilter.filterBy));
}

