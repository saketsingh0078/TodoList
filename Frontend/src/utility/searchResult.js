import { createSlice } from "@reduxjs/toolkit";

const searchResult = createSlice({
  name: "searchResult",
  initialState: {},
  reducers: {
    addSearchResult: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { addSearchResult } = searchResult.actions;
export default searchResult.reducer;
