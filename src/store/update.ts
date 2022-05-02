import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface tabState {
  updateData: any;
  updatedItem: string;
  selectedData: any;
}

const initialState: tabState = {
  updateData: [],
  updatedItem: "",
  selectedData: [],
};

const updateSlice = createSlice({
  name: "update",
  initialState,
  reducers: {
    updateContent(state, action: PayloadAction<string>) {
      state.updateData = action.payload;
    },
    updateDesHandler(state, action: PayloadAction<string>) {
      state.updatedItem = action.payload;
    },
    selectedHandler(state, action: PayloadAction<string>) {
      state.selectedData = action.payload;
    },
  },
});

export const updateActions = updateSlice.actions;
export default updateSlice.reducer;
