import { configureStore } from "@reduxjs/toolkit";
import { cakeSlice } from "../features/cake/cake-slice";
import { biscuitSlice } from "../features/biscuit/biscuit-slice";
import { userSlice } from "../features/user/user-slice";

const store = configureStore({
  reducer: {
    cake: cakeSlice.reducer,
    biscuit: biscuitSlice.reducer,
    user: userSlice.reducer
  }
});

export default store;
