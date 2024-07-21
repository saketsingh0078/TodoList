import { configureStore } from "@reduxjs/toolkit";
import sidebBarReducer from "./sideBarSlice";

const appStore = configureStore({
  reducer: {
    sideBar: sidebBarReducer,
  },
});

export default appStore;
