import React from "react";
import { useSelector } from "react-redux";
import { language } from "../utility/languageConstant";

const Sidebar = () => {
  const toggle = useSelector((store) => store.sideBar.toggle);
  const lang = useSelector((store) => store.lang.langs);

  return (
    <>
      {toggle ? (
        <div className="w-[120px] shadow-md h-[90vh]">
          <ul>
            <li className="font-semibold p-2 border-b-2">
              {language[lang].home}
            </li>
            <li className="font-semibold p-2 border-b-2">
              {language[lang].cart}
            </li>
            <li className="font-semibold p-2 border-b-2">
              {language[lang].contact}
            </li>
            <li className="font-semibold p-2 border-b-2">
              {language[lang].about}
            </li>
          </ul>
        </div>
      ) : (
        " "
      )}
    </>
  );
};

export default Sidebar;
