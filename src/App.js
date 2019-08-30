import React, { useContext, useEffect, useState } from "react";

import ApiContext from "./ApiContext";
import logo from "./logo.svg";

function App() {
  const api = useContext(ApiContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.getPosts().then(setPosts);
  }, [api]);

  return (
    <ul className="App">
      {posts.map(post => (
        <li>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default App;
