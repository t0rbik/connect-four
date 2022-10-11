export type CellValue = number | null;

export type RowBoard = Array<CellValue>;

export type GameBoard = Array<RowBoard>;

export interface GameState {
  gameActive: boolean;
  player1: 1;
  player2: 2;
  currentPlayer: number;
  board: GameBoard;
  gameOver: boolean;
  message: string;
}

export enum GameActionType {
  NEWGAME = "newGame",
  RESET = "reset",
  ENDGAME = "endGame",
  TOGGLEPLAYER = "togglePlayer",
  UPDATEMESSAGE = "updateMessage",
}

export type GameAction =
  | { type: GameActionType.NEWGAME }
  | { type: GameActionType.RESET }
  | { type: GameActionType.ENDGAME; board: GameBoard; message: string }
  | { type: GameActionType.TOGGLEPLAYER; nextPlayer: number; board: GameBoard }
  | { type: GameActionType.UPDATEMESSAGE; message: string };
