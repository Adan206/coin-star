import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type HistoryData = any;

type HistorySliceInnerState = {
  historyData: HistoryData[];
};

type HistorySlice = {
  history: HistorySliceInnerState;
};

// results are named 1 through 7 after the days of the week
export const getHistoryData: AsyncThunk<any, string, {}> = createAsyncThunk(
  "history/getHistoryData",
  async (coinId) => {
    try {
      const currentDayNumber = new Date().getDay();
      const dayOne = await fetch(
        // `https://api.coingecko.com/api/v3/coins/${coinId}/history?date=${currentDayNumber}-2-2022`
        `https://api.coingecko.com/api/v3/coins/${coinId}/history?date=20-2-2022`
      ).then((response) => response.json());
      console.log(dayOne);

      if (dayOne.error) {
        throw new Error(dayOne.error);
      }

      // const dayTwo = await fetch(
      //   `https://api.coingecko.com/api/v3/coins/${coinId}/history?date=${
      //     currentDayNumber - 1
      //   }-2-2022`
      // ).then((response) => response.json());
      // console.log(dayTwo);

      // if (dayTwo.error) {
      //   throw new Error(dayTwo.error);
      // }

      return dayOne;

      // return [dayOne, dayTwo];
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
