import type { GameBoard } from "./gameTypes";

/**
 * Function for copying the current state's board ie preventing mutation
 * @param board gets a current state's board to get a deep clone (prevent mutation)
 * @returns new deep copy of board
 */
export const getDeepCloneOfBoard = (board: GameBoard) => [
  [...board[0]],
  [...board[1]],
  [...board[2]],
  [...board[3]],
  [...board[4]],
  [...board[5]],
];
