import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: {
    toggle: true,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { toggleMenu } = sideBarSlice.actions;
export default sideBarSlice.reducer;
