import { useReducer, useState } from "react";
import { Col, Row, PrimaryButton, SecondaryButton } from "../theme/theme";
import { Text, Loading } from "@nextui-org/react";
import { BoardRow } from "./BoardRow";
import "../styles/Connect4.css";
import { getDeepCloneOfBoard } from "../utils/getDeepCloneOfBoard";
import type { GameState, GameAction } from "../utils/gameTypes";
import { GameActionType } from "../utils/gameTypes";
import { checkForWin } from "../utils/checkWin";
import GameOverModal from "./GameOverModal";

const gameReducer = (state: GameState, action: GameAction) => {
  switch (action.type) {
    case GameActionType.NEWGAME:
      return {
        ...initialGameState,
        gameActive: true,
      };
    case GameActionType.RESET:
      return {
        ...initialGameState,
        gameActive: false,
      };
    case GameActionType.TOGGLEPLAYER:
      return {
        ...state,
        currentPlayer: action.nextPlayer,
        board: action.board,
      };
    case GameActionType.ENDGAME:
      return {
        ...state,
        gameOver: true,
        message: action.message,
        gameActive: false,
        board: action.board,
      };
    case GameActionType.UPDATEMESSAGE:
      return {
        ...state,
        message: action.message,
      };
    default:
      return {
        ...state,
      };
  }
};

const initialGameState = {
  gameActive: false,
  player1: 1 as const,
  player2: 2 as const,
  currentPlayer: 1,
  board: [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
  ],
  gameOver: false,
  message: "",
};

function Connect4() {
  const [gameState, dispatchGameState] = useReducer(
    gameReducer,
    initialGameState
  );
  const [isModalVisible, setIsModalVisible] = useState(false);

  const play = (c: number) => {
    if (!gameState.gameOver && gameState.gameActive) {
      let board = getDeepCloneOfBoard(gameState.board);
      //check if cell is taken by starting at the bottom row and working up
      for (let r = 5; r >= 0; r--) {
        if (!board[r][c]) {
          board[r][c] = gameState.currentPlayer;
          break;
        }
      }

      // Check status of board
      let result = checkForWin(board);
      if (result === gameState.player1) {
        dispatchGameState({
          type: GameActionType.ENDGAME,
          message: "Player1 (red) wins!",
          board,
        });
        setIsModalVisible(true);
      } else if (result === gameState.player2) {
        dispatchGameState({
          type: GameActionType.ENDGAME,
          message: "Player2 (yellow) wins!",
          board,
        });
        setIsModalVisible(true);
      } else if (result === "draw") {
        dispatchGameState({
          type: GameActionType.ENDGAME,
          message: "Draw Game!",
          board,
        });
        setIsModalVisible(true);
      } else {
        const nextPlayer =
          gameState.currentPlayer === gameState.player1
            ? gameState.player2
            : gameState.player1;

        dispatchGameState({
          type: GameActionType.TOGGLEPLAYER,
          nextPlayer,
          board,
        });
      }
    } else if (gameState.gameOver) {
      dispatchGameState({
        type: GameActionType.UPDATEMESSAGE,
        message: "Game Over. Please start a new game.",
      });
    } else {
      dispatchGameState({
        type: GameActionType.UPDATEMESSAGE,
        message: "Hey, you didn't start the game",
      });
    }
  };

  return (
    <>
      <GameOverModal
        winner={gameState.currentPlayer}
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
      />
      <Row css={{ gap: 8 }}>
        <Col>
          <Text h5>
            {gameState.gameOver
              ? "GAME OVER"
              : `Player ${gameState.currentPlayer}, make your turn`}
          </Text>
        </Col>
        <Col>
          <table>
            <tbody>
              {gameState.board.map((row: Array<number | null>, i: number) => (
                <BoardRow key={i} row={row} play={play} />
              ))}
            </tbody>
          </table>
        </Col>
        <Col css={{ gap: 8 }}>
          <Text>
            {gameState.message
              ? gameState.message
              : gameState.gameActive
              ? "I'm watching your game"
              : "Start your game"}
            {!gameState.message && gameState.gameActive && (
              <Loading size='xs' style={{ marginLeft: "4px" }} />
            )}
          </Text>
          <Col css={{ gap: 8 }}>
            <PrimaryButton
              size='celsia'
              color='celsia'
              onClick={() => {
                dispatchGameState({ type: GameActionType.NEWGAME });
              }}
            >
              Start
            </PrimaryButton>
            <SecondaryButton
              size='celsia'
              color='celsia'
              onClick={() => {
                dispatchGameState({ type: GameActionType.RESET });
              }}
            >
              Reset
            </SecondaryButton>
          </Col>
        </Col>
      </Row>
    </>
  );
}

export default Connect4;
