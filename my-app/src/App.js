import "./App.css";
import React, { useState } from "react";

import FirstName from "./components/FirstName";
import MiddleName from "./components/MiddleName";

function App() {
  return (
    <>
      <h1 className="m-5 display-1">
        Gender Neutral <br />
        Baby Name Generator{" "}
      </h1>
      <hr></hr>
      <FirstName />
      <MiddleName />
    </>
  );
}
export default App;
