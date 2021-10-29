import GameCategoryEnum from "./GameCategoryEnum";
import GameStatusEnum from "./GameStatusEnum";

export default interface Game {
  id: string;
  name: string;
  type: GameCategoryEnum;
  status: GameStatusEnum;
  description: string;
  initialDate: Date;
  rating: number;
}
