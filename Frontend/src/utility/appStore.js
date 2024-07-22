import { configureStore } from "@reduxjs/toolkit";
import sidebBarReducer from "./sideBarSlice";
import langReducer from "./langSlice";
import searchResultReducer from "./searchResult";

const appStore = configureStore({
  reducer: {
    sideBar: sidebBarReducer,
    lang: langReducer,
    searchResult: searchResultReducer,
  },
});

export default appStore;
