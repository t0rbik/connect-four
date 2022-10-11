import React from "react";
import { Modal, Text } from "@nextui-org/react";
import { SecondaryButton } from "../theme/theme";

export default function GameOverModal({
  winner,
  isVisible,
  setIsVisible,
}: {
  winner: number;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const closeHandler = () => {
    setIsVisible(false);
  };

  return (
    <Modal
      closeButton
      aria-labelledby='modal-title'
      open={isVisible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text id='modal-title' size={18}>
          Goog game
          <Text b size={18}>
            Player {winner}
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Text>GAME OVER</Text>
      </Modal.Body>
      <Modal.Footer>
        <SecondaryButton auto color='celsia' onClick={closeHandler}>
          Close
        </SecondaryButton>
      </Modal.Footer>
    </Modal>
  );
}
