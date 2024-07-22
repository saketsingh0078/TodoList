import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearchResult } from "../utility/searchResult";

export const Search = () => {
  const dispatch = useDispatch();
  const cacheResult = useSelector((store) => store.searchResult);

  // debouncing - means stop to send request for few second
  const [search, setSearch] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheResult[search]) {
        setSuggestion(cacheResult[search]);
        console.log(cacheResult[search]);
      } else {
        fetchData();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [search]);

  const fetchData = async () => {
    const data = await fetch(
      `http://suggestqueries.google.com/complete/search?client=firefox&q=${search}`
    );
    const json = await data.json();
    console.log(json[1]);
    setSuggestion(json[1]);
    dispatch(
      addSearchResult({
        [search]: json[1],
      })
    );
  };
  return (
    <div className="w-[100%]">
      <div className="w-[90%] h-[40px] flex justify-center mt-2">
        <input
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          className="border-2 border-black rounded-lg mx-2 w-[500px] px-2 py-1 text-lg"
        />
        <button className="border-2 border-black rounded-lg px-2 py-1 bg-black text-white">
          Search
        </button>
      </div>
      {showSuggestion && (
        <div className="absolute w-[57%] bg-white left-[19.2%]">
          <ul className=" w-full text-lg  ">
            {suggestion.map((elem, index) => (
              <li
                key={index}
                className="px-2 py-1 border-b-2 border-gray-100 hover:bg-gray-200 cursor-pointer"
              >
                {elem}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
