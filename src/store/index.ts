import { configureStore } from "@reduxjs/toolkit";
import latestNewsReducer from "./latestNewsSlice";

const store = configureStore({
  reducer: {
    latestNews: latestNewsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
