// import * as api from "./api";

import ApiContext from "./ApiContext";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { fetch as fetchPolyfill } from "whatwg-fetch";

const noop = async () => {
  let apiCall = await new Promise(resolve => {
    resolve("noop");
  });
  return [];
};

const getPosts = async () => {
  let apiCall = await fetchPolyfill(
    "https://jsonplaceholder.typicode.com/posts"
  );
  let posts = await apiCall.json();
  return posts;
};

it("stubs the api with a promise", async () => {
  const div = document.createElement("div");

  let api = {
    getPosts: noop
  };

  await act(async () => {
    ReactDOM.render(
      <ApiContext.Provider value={api}>
        <App />>
      </ApiContext.Provider>,
      div
    );
  });
  ReactDOM.unmountComponentAtNode(div);
});

it("uses a fetch within the api call", () => {
  const div = document.createElement("div");

  let api = {
    getPosts
  };

  act(() => {
    ReactDOM.render(
      <ApiContext.Provider value={api}>
        <App />>
      </ApiContext.Provider>,
      div
    );
  });
  ReactDOM.unmountComponentAtNode(div);
});
