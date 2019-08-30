import { fetch as fetchPolyfill } from "whatwg-fetch";

export const getPosts = async () => {
  let apiCall = await fetchPolyfill(
    "https://jsonplaceholder.typicode.com/posts"
  );
  let posts = await apiCall.json();
  return posts;
};
