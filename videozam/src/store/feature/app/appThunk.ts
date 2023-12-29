import { url } from "../../../utils/constants";

export const getVideosThunk = async (_: void, thunkAPI: any) => {
  try {
    let URL = url;
    const state = thunkAPI.getState();
    const pageToken = state.app.nextPageToken;
    if (pageToken !== "") {
      URL = url + "&pageToken=" + pageToken;
    }
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};
