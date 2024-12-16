import React, { useState } from "react";

function PostData() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const [localId, setLocalId] = useState(101); // Initialize a local ID counter

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const postData = {
      id: localId, // Assign the local ID
      title: title,
      body: body,
      userId: 1,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to send post data");
        }
        return response.json();
      })
      .then((data) => {
        // Simulate setting the unique ID manually
        setResponse({ ...postData, id: localId });
        setLocalId((prevId) => prevId + 1); // Increment local ID
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
        setLoading(false);
      });

    setTitle("");
    setBody("");
  };

  return (
    <div>
      <h2>posting a new Data to an API - Option4</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Post</button>
      </form>
      {loading && <p>Sending post...</p>}
      {response && (
        <div>
          <h3>Server Response:</h3>
          <p>Post ID: {response.id}</p>
          <p>Title: {response.title}</p>
          <p>Body: {response.body}</p>
        </div>
      )}
    </div>
  );
}

export default PostData;
