import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./feature/app/appSlice";
import searchSlice from "./feature/search/searchSlice";
import chatSlice from "./feature/chat/chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
