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
    "Blake",
    "Cameron",
    "Austin",
  ];

  const handleClickFirstName = () => {
    setFirstName(firstNames[Math.floor(Math.random() * firstNames.length)]);
  };

  return (
    <div>
      <h2 className="display-5">{firstName}</h2>
      <button
        className="btn btn-secondary btn-lg mt-3 mb-5"
        onClick={handleClickFirstName}
      >
        First Name
      </button>
    </div>
  );
}
