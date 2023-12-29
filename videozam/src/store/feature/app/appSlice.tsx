import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { VideoType } from "../../../types/video-type";
import { getVideosThunk } from "./appThunk";

type AppState = {
  isSidebarOpen: boolean;
  videos: VideoType[];
  isLoading: boolean;
  isError: boolean;
  nextPageToken: string;
};

const initialState: AppState = {
  isSidebarOpen: true,
  videos: [],
  isLoading: false,
  isError: false,
  nextPageToken: "",
};

export const getVideos = createAsyncThunk("app/getVideos", getVideosThunk);
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    toggleSidebar: (state: AppState) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    closeSidebar: (state: AppState) => {
      state.isSidebarOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVideos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVideos.fulfilled, (state, action) => {
        state.videos = [...state.videos, ...action.payload.items];
        state.nextPageToken = action.payload.nextPageToken;
        state.isLoading = false;
      })
      .addCase(getVideos.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default appSlice.reducer;
export const { toggleSidebar, closeSidebar } = appSlice.actions;
