import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10
};

export const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state = initialState, action) => {
      state.numOfCakes -= action.payload;
    },
    restocked: (state = initialState, action) => {
      state.numOfCakes += action.payload;
    }
  }
  // extraReducers: (builder) => {
  //   builder.addCase(biscuitSlice.actions.ordered, (state, action) => {
  //     state.numOfCakes += action.payload;
  //   });
  // }
});
