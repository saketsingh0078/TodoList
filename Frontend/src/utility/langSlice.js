import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "lang",
  initialState: {
    langs: "en",
  },
  reducers: {
    langSelect: (state, action) => {
      state.langs = action.payload;
    },
  },
});

export const { langSelect } = langSlice.actions;
export default langSlice.reducer;
