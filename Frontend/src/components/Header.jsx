import React from "react";
import { SUPPORTED_LANGUAGE } from "../utility/constants";
import { useDispatch, useSelector } from "react-redux";
import { langSelect } from "../utility/langSlice";
import { language } from "../utility/languageConstant";
import { toggleMenu } from "../utility/sideBarSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const lang = useSelector((store) => store.lang.langs);

  const handleLangChange = (e) => {
    dispatch(langSelect(e.target.value));
  };
  const handleClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex border-b-2 shadow-md justify-between p-3">
      <div className="flex justify-between">
        <h1
          className="font-semibold text-lg border-2 border-gray-200 mr-2 px-2 py-1 cursor-pointer"
          onClick={handleClick}
        >
          {language[lang].menu}
        </h1>
        <h1 className="font-semibold text-lg border-2 border-gray-200 px-2 py-1 mr-2">
          {language[lang].home}
        </h1>
      </div>
      <div className="flex justify-between">
        <div className="font-semibold text-lg border-2 border-gray-200 px-2 py-1 mr-2">
          <select onChange={handleLangChange}>
            {SUPPORTED_LANGUAGE.map((lang, index) => (
              <option key={index} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
        <h1 className="font-semibold text-lg border-2 border-gray-200 px-2 py-1 mr-2">
          {language[lang].about}
        </h1>
        <h1 className="font-semibold text-lg border-2 border-gray-200 px-2 py-1 mr-2">
          {language[lang].cart}
        </h1>
        <h1 className="font-semibold text-lg  border-2 border-gray-200 px-2 py-1 mr-2">
          {language[lang].login}
        </h1>
      </div>
    </div>
  );
};
