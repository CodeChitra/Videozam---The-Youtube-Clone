import { searched_url, suggestions_url } from "../../../utils/constants";
import { setIsLoading } from "../app/appSlice";
import { setCachedSuggestions } from "./searchSlice";

export const getSuggestionsThunk = async (
  searchQuery: string,
  thunkAPI: any
) => {
  const { cachedSuggestions } = thunkAPI.getState().search;
  try {
    if (cachedSuggestions[searchQuery]) {
      return cachedSuggestions[searchQuery];
    } else {
      const res = await fetch(suggestions_url + searchQuery);
      if (!res.ok) {
        return ["React", "Next JS", "TypeScript", "Cricket", "Ram Mandir"];
      }
      const json = await res.json();
      thunkAPI.dispatch(setCachedSuggestions({ [searchQuery]: json[1] }));
      return json[1];
    }
  } catch (error) {
    return error;
  }
};

export const getSearchedVideosThunk = async (
  searchQuery: string,
  thunkAPI: any
) => {
  try {
    thunkAPI.dispatch(setIsLoading(true));
    let URL = searched_url + searchQuery;
    const state = thunkAPI.getState();
    const pageToken = state.search.nextPageToken;
    if (pageToken !== "") {
      URL = URL + "&pageToken=" + pageToken;
    }
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  } finally {
    thunkAPI.dispatch(setIsLoading(false));
  }
};
