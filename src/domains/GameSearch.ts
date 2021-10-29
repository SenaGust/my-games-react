import GameFilterByEnum from "./GameFilterByEnum";

export default interface GameFilter {
  filterBy: GameFilterByEnum;
  value: string | number;
}
