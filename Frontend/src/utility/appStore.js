import { configureStore } from "@reduxjs/toolkit";
import sidebBarReducer from "./sideBarSlice";
import langReducer from "./langSlice";

const appStore = configureStore({
  reducer: {
    sideBar: sidebBarReducer,
    lang: langReducer,
  },
});

export default appStore;
