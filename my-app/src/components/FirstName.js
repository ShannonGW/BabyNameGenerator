import React, { useState } from "react"; //named function we need to use {} and correct name

const UseFirstName = () => {
  const [firstName, setFirstName] = useState("");

  const handleClick = () => {
    if (firstName === "") {
      setFirstName("Rose");
    } else {
      setFirstName("Clover");
    }
  };
  return (
    <>
      <h1>{firstName}</h1>
      <button onClick={handleClick}>Click for Random First Name</button>
    </>
  );
};

export default UseFirstName;
