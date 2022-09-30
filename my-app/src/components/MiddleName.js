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
    "Kyle",
    "Logan",
    "Ezra",
  ];

  const handleClickMiddleName = () => {
    setMiddleName(middleNames[Math.floor(Math.random() * middleNames.length)]);
  };

  return (
    <div>
      <h2 className="display-5">{middleName}</h2>
      <button
        className="btn btn-secondary btn-lg  mt-3 "
        onClick={handleClickMiddleName}
      >
        Middle Name
      </button>
    </div>
  );
}
