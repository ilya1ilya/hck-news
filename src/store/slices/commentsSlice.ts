import { createSlice } from "@reduxjs/toolkit";

import { fetchComments } from "../actions/fetchComments";

import IComment from "../../models/IComment";

type commentsState = {
  list: undefined | IComment[];
  loading: boolean;
  error: null | string;
};

const initialState: commentsState = {
  list: [],
  loading: false,
  error: null,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      });
  },
});

export default commentsSlice.reducer;
