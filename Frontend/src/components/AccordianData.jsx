import React, { useState } from "react";

export const AccordianData = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className="p-4 mb-2 shadow-md w-[700px]">
      <div className="flex justify-between">
        <h1 className="font-semibold">Science</h1>
        <span onClick={handleClick} className=" cursor-pointer border-0">
          ⬇️
        </span>
      </div>
      {toggle ? (
        <h4>
          I study the science in my school days and I love the subject specially
          the physics.I love to study the physics.
        </h4>
      ) : (
        " "
      )}
    </div>
  );
};
