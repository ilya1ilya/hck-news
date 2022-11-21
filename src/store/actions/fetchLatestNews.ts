import { createAsyncThunk } from "@reduxjs/toolkit";

import IPost from "../../models/IPost";

export const fetchLatestNews = createAsyncThunk<
  IPost[],
  undefined,
  { rejectValue: string }
>("latestNews/fetchLatestNews", async function (_, { rejectWithValue }) {
  const response = await fetch(
    "https://hacker-news.firebaseio.com/v0/newstories.json"
  );

  if (!response.ok) {
    return rejectWithValue("Failed to fetch data!");
  }

  const allLatestNewsIds = await response.json();
  const top100 = allLatestNewsIds.slice(0, 100);
  const topLatestNewsRequests = top100.map((id: number) => {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  });

  const top100LatestNews = Promise.all(topLatestNewsRequests).then(
    (responses) => Promise.all(responses.map((response) => response.json()))
  );

  return top100LatestNews;
});
