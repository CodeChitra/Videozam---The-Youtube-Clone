import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./feature/app/appSlice";
import searchSlice from "./feature/search/searchSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
