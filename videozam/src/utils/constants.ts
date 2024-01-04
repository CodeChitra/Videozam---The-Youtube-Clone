const API_KEY = import.meta.env.VITE_API_KEY;
export const popular_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&key=${API_KEY}&maxResults=9`;

export const suggestions_url =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const searched_url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=18&type=video&key=${API_KEY}&q=`;
