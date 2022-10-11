import React from "react";
import { PrimaryButton, SecondaryButton } from "./theme/theme";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <PrimaryButton>Im primary</PrimaryButton>
      <SecondaryButton>Im secondary</SecondaryButton>
    </div>
  );
}

export default App;
