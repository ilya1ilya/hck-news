import { createAsyncThunk } from "@reduxjs/toolkit";

import INewsItem from "../../models/INewsItem";

export const fetchNewsItem = createAsyncThunk<
  INewsItem,
  number,
  { rejectValue: string }
>("newsItem/fetchNewsItem", async function (id, { rejectWithValue }) {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );

  if (!response.ok) {
    return rejectWithValue("Failed to fetch data!");
  }

  const itemNewsInfo = await response.json();

  return itemNewsInfo;
});
