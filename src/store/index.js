import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/conterSlice";
import gameReducer from "./slice/gameSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    game: gameReducer,
  },
});
