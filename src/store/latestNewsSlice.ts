import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type Post = {
  id: number;
  by: string;
  title: string;
  time: number;
  score: number;
};

type latestNewsState = {
  list: Post[];
  loading: boolean;
  error: null | string;
};

export const fetchLatestNews = createAsyncThunk<
  Post[],
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
