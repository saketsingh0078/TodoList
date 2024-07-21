import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../utility/sideBarSlice";

const Sidebar = () => {
  const toggle = useSelector((store) => store.sideBar.toggle);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="w-[120px] shadow-md h-screen">
      <h1 className="text-right cursor-pointer" onClick={handleClick}>
        ^_^
      </h1>
      {toggle ? (
        <ul>
          <li className="font-semibold p-2 border-b-2">Home</li>
          <li className="font-semibold p-2 border-b-2">Cart</li>
          <li className="font-semibold p-2 border-b-2"> Contact</li>
          <li className="font-semibold p-2 border-b-2">About</li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sidebar;
