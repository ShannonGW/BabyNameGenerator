import { useState } from "react";
import React from "react";

export default function FirstName() {
  const [firstName, setFirstName] = useState([]);

  const firstNames = [
    "Alex",
    "James",
    "Tatum",
    "Drew",
    "Taylor",
    "Jordan",
    "Kennedy",
    "Parker",
    "Avery",
    "Emerson",
  ];

  const handleClickFirstName = () => {
    setFirstName(firstNames[Math.floor(Math.random() * firstNames.length)]);
  };

  return (
    <div>
      <h2>{firstName}</h2>
      <button onClick={handleClickFirstName}>First Name</button>
    </div>
  );
}
