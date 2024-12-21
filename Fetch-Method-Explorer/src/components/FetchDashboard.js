import React, { useState } from "react";
import { fetchGetData } from "../services/getMethod";
import { fetchPostData } from "../services/postMethod";
import { updatePost } from "../services/putRequest"; // Import the PUT function
import { partiallyUpdatePost } from "../services/patchRequest"; // Import the PATCH function
import { deletePost } from "../services/deleteRequest"; // Import the DELETE function

const FetchDashboard = () => {
  const [data, setData] = useState(null);

  const handleGet = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const response = await fetchGetData(url);
    setData(response);
  };

  const handlePost = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const payload = {
      title: "foo",
      body: "bar",
      userId: 1,
    };

    const response = await fetchPostData(url, payload);
    setData(response);
  };

  const handleUpdatePost = () => {
    const updatedData = {
      title: "Updated Title from FetchDashboard",
      body: "Updated body content from FetchDashboard.",
      userId: 1,
    };
    const postId = 1; // Update post with ID 1

    updatePost(postId, updatedData); // Call the PUT method
  };

  const [message, setMessage] = useState(""); // State to store response message

  const handlePartialUpdate = async () => {
    const partialUpdateData = {
      title: "Partially Updated Title", // Only update the title
    };
    const postId = 1; // Update post with ID 1

    const result = await partiallyUpdatePost(postId, partialUpdateData); // Call the PATCH function
    if (result) {
      setMessage(`Post patched successfully: ${JSON.stringify(result)}`);
    } else {
      setMessage("Failed to patch the post. Check console for errors.");
    }
  };

  const [message1, setMessage1] = useState(""); // State to store response message

  const handleDeletePost = async () => {
    const postId = 1; // Specify the post ID to delete

    const result = await deletePost(postId); // Call the DELETE function
    if (result) {
      setMessage1(result.message); // Display success message
    } else {
      setMessage1("Failed to delete the post. Check console for errors.");
    }
  };

  return (
    <div>
      <h2>Explore Fetch Methods</h2>
      <div>
        <h3>Response:</h3>
        <pre>{data ? JSON.stringify(data, null, 2) : "No data yet"}</pre>
      </div>
      <div>
        <button onClick={handleGet}>GET</button>
        <button onClick={handlePost}>POST</button>
      </div>
      <div>
        <h2>Fetch Dashboard PUT Method</h2>
        {/* Other methods (GET, POST buttons, etc.) */}
        <button onClick={handleUpdatePost}>Update Post (PUT)</button>
      </div>
      <div>
        <h2>Fetch Dashboard PATCH Method</h2>
        {/* PUT and other methods */}
        <button onClick={handlePartialUpdate}>
          Partially Update Post (PATCH)
        </button>
        <p>{message}</p> {/* Display success or error message */}
      </div>
      <div>
        <h2>Fetch Dashboard DELETE Method</h2>
        {/* Other methods like PUT and PATCH */}
        <button onClick={handleDeletePost}>Delete Post (DELETE)</button>
        <p>{message1}</p> {/* Display success or error message */}
      </div>
    </div>
  );
};

export default FetchDashboard;
