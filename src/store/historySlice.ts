import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type HistoryData = any;

type HistorySliceInnerState = {
  historyData: HistoryData[];
};

type HistorySlice = {
  history: HistorySliceInnerState;
};

export const getHistoryData: AsyncThunk<any, string, {}> = createAsyncThunk(
  "history/getHistoryData",
  async (coinId) => {
    try {
      const results = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/history?date=20-2-2022`
      ).then((response) => response.json());
      console.log(results);
      if (results.error) {
        throw new Error(results.error);
      }
      if (results.error) return results;
    } catch (error) {
      return "error";
    }
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
      const coinId = action.meta.arg as any;
      // Add user to the state array
      state.historyData[coinId] = action.payload;
    });
  },
});

export const selectHistoryData =
  (coinId: string): any =>
  (state: HistorySlice) =>
    state.history.historyData[coinId as any] || [];

export default historySlice.reducer;
