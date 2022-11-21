import { configureStore } from "@reduxjs/toolkit";
import latestNewsReducer from "./slices/latestNewsSlice";
import newsItemReducer from "./slices/newsItemSlice";

const store = configureStore({
  reducer: {
    latestNews: latestNewsReducer,
    newsItem: newsItemReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
