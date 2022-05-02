import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "./tab";
import configReducer from "./congif";
import updateReducer from "./update";

const store = configureStore({
  reducer: {
    tab: tabReducer,
    config: configReducer,
    update: updateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
