import { useState } from "react";
import React from "react";

export default function MiddleName() {
  const [middleName, setMiddleName] = useState([]);

  const middleNames = [
    "Shannon",
    "Max",
    "Billy",
    "Carter",
    "Dana",
    "Kim",
    "Carter",
    "Charlie",
    "Sumner",
    "Andi",
  ];

  const handleClickMiddleName = () => {
    setMiddleName(middleNames[Math.floor(Math.random() * middleNames.length)]);
  };

  return (
    <div>
      <h2>{middleName}</h2>
      <button onClick={handleClickMiddleName}>Middle Name</button>
    </div>
  );
}
