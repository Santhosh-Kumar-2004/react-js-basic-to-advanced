import React, { useState, useEffect } from "react";

function GetData() {
  const [posts, setPosts] = useState([]); // Store fetched posts
  const [loading, setLoading] = useState(true); // Show a loading spinner
  const [error, setError] = useState(null); // Handle errors

  // Fetch posts when the component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data); // Store the fetched posts
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        setError(error.message); // Handle any errors
        setLoading(false);
      });
  }, []); // Empty dependency array to fetch only once

  // Handle loading state
  if (loading) {
    return <p>Loading posts...</p>;
  }

  // Handle error state
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Retrieving The Data From the API using Fetch method - Option5</h2>
      {posts.slice(0, 5).map((post) => (
        <div key={post.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default GetData;
