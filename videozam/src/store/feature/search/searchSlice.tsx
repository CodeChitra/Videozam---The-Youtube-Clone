import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSearchedVideosThunk, getSuggestionsThunk } from "./searchThunk";
import { VideoType } from "../../../types/video-type";

type SearchState = {
  suggestions: string[];
  showSuggestions: boolean;
  cachedSuggestions: {
    [index: string]: string[];
  };
  searchedVideos: VideoType[];
  nextPageToken: "";
};
const initialState: SearchState = {
  suggestions: [],
  cachedSuggestions: {},
  showSuggestions: false,
  searchedVideos: [],
  nextPageToken: "",
};

export const getSuggestions = createAsyncThunk(
  "search/getSuggestions",
  getSuggestionsThunk
);

export const getSearchedVideos = createAsyncThunk(
  "search/getSearchedVideos",
  getSearchedVideosThunk
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setShowSuggestions: (state, action: PayloadAction<boolean>) => {
      state.showSuggestions = action.payload;
    },
    setSuggestions: (state, action: PayloadAction<string[]>) => {
      state.suggestions = action.payload;
    },
    setCachedSuggestions: (state, action) => {
      state.cachedSuggestions = {
        ...action.payload,
        ...state.cachedSuggestions,
      };
    },
    clearSearchedVideos: (state) => {
      state.searchedVideos = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSuggestions.fulfilled, (state, action) => {
        state.suggestions = action.payload;
      })
      .addCase(getSearchedVideos.fulfilled, (state, action) => {
        state.searchedVideos = [
          ...state.searchedVideos,
          ...action.payload.items,
        ];
        state.nextPageToken = action.payload.nextPageToken;
      });
  },
});

export default searchSlice.reducer;
export const {
  setShowSuggestions,
  setSuggestions,
  setCachedSuggestions,
  clearSearchedVideos,
} = searchSlice.actions;
