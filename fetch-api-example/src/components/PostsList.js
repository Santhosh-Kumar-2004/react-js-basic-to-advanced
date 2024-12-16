import React, { useState, useEffect } from "react";

function PostsList() {
  // State to store the list of posts
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // To show a loading indicator

  // Fetch the list of posts when the component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data); // Save the list of posts to state
        setLoading(false); // Stop the loading indicator
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Posts List</h2>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <ul>
          {posts.slice(0, 5).map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PostsList;
