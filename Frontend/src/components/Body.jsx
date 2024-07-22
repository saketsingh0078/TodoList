import React from "react";
import Sidebar from "./Sidebar";
import { Header } from "./Header";
import { Search } from "./Search";
import InfiniteScroll from "./InfiniteScroll";

export const Body = () => {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="w-full h-full">
          <Search />
          <InfiniteScroll />
        </div>
      </div>
    </div>
  );
};
