import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface tabState {
  tabActive: string;
  data: any;
  trlData: any;
}

const initialState: tabState = {
  tabActive: "tabDes",
  data: [],
  trlData: [],
};

const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    changeTab(state, action: PayloadAction<string>) {
      state.tabActive = action.payload;
    },

    fetchData(state, action: PayloadAction<string>) {
      state.data = action.payload;
    },

    fetchTrl(state, action: PayloadAction<string>) {
      state.trlData = action.payload;
    },
  },
});

export const tabActions = tabSlice.actions;
export default tabSlice.reducer;
