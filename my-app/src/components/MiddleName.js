import React, { useState } from "react"; //named function we need to use {} and correct name
import FirstName from "./FirstName";

const UseMiddleName = () => {
  const [middleName, setMiddleName] = useState("");

  const handleClick = () => {
    if (middleName === FirstName) {
      setMiddleName("Rose");
    } else {
      setMiddleName("Clover");
    }
  };
  return (
    <>
      <h1>{middleName}</h1>
      <button onClick={handleClick}>Click for Random Middle Name</button>
    </>
  );
};

export default UseMiddleName;
