import { createSlice } from "@reduxjs/toolkit";

import { fetchLatestNews } from "../actions/fetchLatestNews";

import IPost from "../../models/IPost";

type latestNewsState = {
  list: IPost[];
  loading: boolean;
  error: null | string;
};

const initialState: latestNewsState = {
  list: [],
  loading: false,
  error: null,
};

const latestNewsSlice = createSlice({
  name: "latestNews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLatestNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLatestNews.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      });
  },
});

export default latestNewsSlice.reducer;
