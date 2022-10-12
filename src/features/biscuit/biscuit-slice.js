import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfBiscuits: 10
};

export const biscuitSlice = createSlice({
  name: "biscuits",
  initialState,
  reducers: {
    ordered: (state = initialState, action) => {
      state.numOfBiscuits -= action.payload;
    },
    restocked: (state = initialState, action) => {
      state.numOfBiscuits += action.payload;
    }
  }
});
