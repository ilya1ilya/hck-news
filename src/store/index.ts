import { configureStore } from "@reduxjs/toolkit";
import latestNewsReducer from "./slices/latestNewsSlice";
import newsItemReducer from "./slices/newsItemSlice";
import commentsReducer from "./slices/commentsSlice";

const store = configureStore({
  reducer: {
    latestNews: latestNewsReducer,
    newsItem: newsItemReducer,
    comments: commentsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
