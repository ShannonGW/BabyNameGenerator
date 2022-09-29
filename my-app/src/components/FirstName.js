import React, { useState } from "react"; //named function we need to use {} and correct name
import { data } from "../data";

const UseFirstName = () => {
  const [firstName, setFirstName] = useState(data);

  //   const handleClick = () => {
  //     // if (firstName === "") {
  //     //   setFirstName("Rose");
  //     // } else {
  //     //   setFirstName("Clover");
  //     // }
  //     // let newFirstName = firstName.filter((firstName) => firstName.id !== id);
  //     // setFirstName(firstName);
  //   };
  return (
    <>
      {data.map((name1) => {
        const { id, name } = name1;
        return (
          <div key={id}>
            <h4>{name}</h4>
          </div>
        );
      })}
      {/* <button onClick={handleClick}>Click for Random First Name</button> */}
    </>
  );
};

export default UseFirstName;
