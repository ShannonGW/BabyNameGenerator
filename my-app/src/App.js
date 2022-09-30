import "./App.css";
import React, { useState } from "react";

import FirstName from "./components/FirstName";
import MiddleName from "./components/MiddleName";

function App() {
  return (
    <>
      <h1>Gender Neutral Baby Name Generator </h1>
      <FirstName />
      <MiddleName />
    </>
  );
}
export default App;
