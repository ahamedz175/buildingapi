import axios from "axios";
import React from "react";

const baseURL = "http://localhost:8080/catalog/names";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        name1: "Hello World!",
        name2: "This is a new post."
      },{headers: {'content-type': 'application/json'}})
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.name1}</h1>
      <p>{post.name2}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}