import React from "react";

export const InfiniteScrollCard = ({ url }) => {
  return (
    <div className=" p-2 rounded-md shadow-md m-2">
      <img className="w-[300px] h-[250px]" src={url} alt="meme" />
    </div>
  );
};
