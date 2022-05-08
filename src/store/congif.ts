import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface configState {
  config: any;
}

const initialState: configState = {
  config: null
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    fetchConfig(state, action: PayloadAction<{} | null>) {
      state.config = action.payload;
    }
  }
});

export const configActions = configSlice.actions;
export default configSlice.reducer;
