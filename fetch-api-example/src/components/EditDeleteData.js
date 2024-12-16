import React, { useState, useEffect } from "react";

function EditDeleteData() {
  const [posts, setPosts] = useState([]); // Store fetched posts
  const [loading, setLoading] = useState(true); // Show loading spinner
  const [error, setError] = useState(null); // Handle errors
  const [editTitle, setEditTitle] = useState(""); // Track the new title for updates

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
        setPosts(data.slice(0, 5)); // Limit to the first 10 posts
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Update a post (PUT request)
  const handleUpdate = (id) => {
    const updatedPost = {
      title: editTitle || "Updated Title", // Use the new title or a default one
      body: "This is the updated body content",
    };

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update post");
        }
        return response.json();
      })
      .then((data) => {
        alert(`Post with ID ${id} updated successfully!`);
        setPosts((prevPosts) =>
          prevPosts.map((post) => (post.id === id ? { ...post, ...data } : post))
        );
      })
      .catch((error) => alert(error.message));
  };

  // Delete a post (DELETE request)
  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete post");
        }
        alert(`Post with ID ${id} deleted successfully!`);
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      })
      .catch((error) => alert(error.message));
  };

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
      <h2>PUT and DELETE methods With an API - Option6</h2>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <input
            type="text"
            placeholder="New Title"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <button onClick={() => handleUpdate(post.id)} style={{ marginRight: "10px" }}>
            Update Post
          </button>
          <button onClick={() => handleDelete(post.id)} style={{ backgroundColor: "red", color: "white" }}>
            Delete Post
          </button>
        </div>
      ))}
    </div>
  );
}

export default EditDeleteData;
