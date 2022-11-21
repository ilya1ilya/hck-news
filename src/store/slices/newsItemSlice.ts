import { createSlice } from "@reduxjs/toolkit";

import { fetchNewsItem } from "../actions/fetchNewsItem";

import INewsItem from "../../models/INewsItem";

type newsItemState = {
  item: null | INewsItem;
  loading: boolean;
  error: null | string;
};

const initialState: newsItemState = {
  item: null,
  loading: false,
  error: null,
};

const newsItemSlice = createSlice({
  name: "newsItem",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewsItem.fulfilled, (state, action) => {
        state.item = action.payload;
        state.loading = false;
      });
  },
});

export default newsItemSlice.reducer;
