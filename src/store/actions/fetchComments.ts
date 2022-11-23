import { createAsyncThunk } from "@reduxjs/toolkit";

import IComment from "../../models/IComment";

export const fetchComments = createAsyncThunk<
  IComment[],
  number[],
  { rejectValue: string }
>("comments/fetchComments", async function (kids, { rejectWithValue }) {
  const requests = kids.map((kid) => {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${kid}.json`);
  });

  const comments = Promise.all(requests).then((responses) =>
    Promise.all(responses.map((response) => response.json()))
  );

  if (!comments) {
    return rejectWithValue("Failed to fetch comments!");
  }

  return comments;
});
