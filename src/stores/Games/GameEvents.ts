import { createEvent } from "effector";
import Game from "../../domains/Game";

//List events
export const startListGames = createEvent("startLoadOccurrences");
export const startListDone = createEvent<{ gamesToBeAdded: Array<Game> }>(
  "startLoadOccurrences"
);
export const startListFailed = createEvent("startLoadOccurrences");

//Create events
export const createGameDone = createEvent<{ gameToBeAdded: Game }>(
  "startLoadOccurrences"
);

//Edit events
export const editGameDone = createEvent<{
  gameToBeAdded: Game;
  gameIdToBeEdited: string;
}>("startLoadOccurrences");

//Delete events
export const deleteGameDone = createEvent<{ gameId: string }>(
  "startLoadOccurrences"
);
