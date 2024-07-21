import React from "react";
import { SUPPORTED_LANGUAGE } from "../utility/constants";

export const Header = () => {
  return (
    <div className="flex border-b-2 shadow-md justify-between p-3">
      <div className="flex justify-between">
        <h1 className="font-semibold text-lg mr-3">Menu</h1>
        <h1 className="font-semibold text-lg mr-3">Home</h1>
      </div>
      <div className="flex justify-between">
        <div className="font-semibold text-lg mr-3">
          <select>
            {SUPPORTED_LANGUAGE.map((lang) => (
              <option value={lang.identifier}>{lang.name}</option>
            ))}
          </select>
        </div>
        <h1 className="font-semibold text-lg mr-3">About</h1>
        <h1 className="font-semibold text-lg mr-3"> Cart</h1>
        <h1 className="font-semibold text-lg mr-3">Login</h1>
      </div>
    </div>
  );
};
