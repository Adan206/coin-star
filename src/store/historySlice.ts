import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type HistoryData = any;

type HistorySliceInnerState = {
  historyData: HistoryData[];
};

type HistorySlice = {
  history: HistorySliceInnerState;
};

export const getHistoryData = createAsyncThunk(
  "history/getHistoryData",
  async () => {
    const results = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/history?date=20-2-2022`
    ).then((response) => response.json());
    return results;
  }
);

export const historySlice = createSlice({
  name: "history",
  initialState: {
    historyData: {},
  } as HistorySliceInnerState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getHistoryData.fulfilled, (state, action) => {
      // Add user to the state array
      state.historyData = action.payload;
    });
  },
});

export const selectHistoryData = (state: HistorySlice) =>
  state.history.historyData;

export default historySlice.reducer;
