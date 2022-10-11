import React from "react";
import { Text } from "@nextui-org/react";
import { Col } from "./theme/theme";
import "./styles/App.css";
import Connect4 from "./components/Connect4";

function App() {
  return (
    <div className='App'>
      <Col css={{ gap: 8 }}>
        <Text h1>Connect 4</Text>
        <Connect4 />
      </Col>
    </div>
  );
}

export default App;
