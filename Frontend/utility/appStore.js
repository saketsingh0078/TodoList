import { configureStore } from "@reduxjs/toolkit";
import sidebBarReducer from "../utility/sideBarSlice";

const appStore = configureStore({
  reducer: {
    sideBar: sidebBarReducer,
  },
});

export default appStore;
