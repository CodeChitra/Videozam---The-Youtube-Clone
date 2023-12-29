import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./feature/app/appSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
