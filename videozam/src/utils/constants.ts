const API_KEY = "AIzaSyCyKUlgK5FSK71oY7S6OuOos46U6klxI0U";

export const popular_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&key=${API_KEY}&maxResults=9`;

export const suggestions_url =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
