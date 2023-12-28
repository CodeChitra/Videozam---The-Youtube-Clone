import { createSlice } from "@reduxjs/toolkit";

type AppState = {
  isSidebarOpen: boolean;
};

const initialState: AppState = {
  isSidebarOpen: true,
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar: (state: AppState) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export default appSlice.reducer;
export const { toggleSidebar } = appSlice.actions;
