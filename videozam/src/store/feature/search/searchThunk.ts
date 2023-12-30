import { suggestions_url } from "../../../utils/constants";
import { setCachedSuggestions } from "./searchSlice";

const getSuggestionsThunk = async (searchQuery: string, thunkAPI: any) => {
  const { cachedSuggestions } = thunkAPI.getState().search;
  try {
    if (cachedSuggestions[searchQuery]) {
      return cachedSuggestions[searchQuery];
    } else {
      const res = await fetch(suggestions_url + searchQuery);
      const json = await res.json();
      thunkAPI.dispatch(setCachedSuggestions({ [searchQuery]: json[1] }));
      return json[1];
    }
  } catch (error) {
    return error;
  }
};

export default getSuggestionsThunk;
