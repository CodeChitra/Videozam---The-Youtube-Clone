import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getSuggestionsThunk from "./searchThunk";

type SearchState = {
  suggestions: string[];
  showSuggestions: boolean;
  cachedSuggestions: {
    [index: string]: string[];
  };
};
const initialState: SearchState = {
  suggestions: [],
  cachedSuggestions: {},
  showSuggestions: false,
};

export const getSuggestions = createAsyncThunk(
  "search/getSuggestions",
  getSuggestionsThunk
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
  },
  extraReducers: (builder) => {
    builder.addCase(getSuggestions.fulfilled, (state, action) => {
      state.suggestions = action.payload;
    });
  },
});

export default searchSlice.reducer;
export const { setShowSuggestions, setSuggestions, setCachedSuggestions } =
  searchSlice.actions;
