import React, { useState } from "react";

function FetchOnButton() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to handle button click and fetch data
  const fetchData = () => {
    setLoading(true); // Start loading
    fetch("https://jsonplaceholder.typicode.com/posts/2") // Fetch another post
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json(); // Convert response to JSON
      })
      .then((data) => {
        setData(data); // Save fetched data to state
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Fetching Data by Triggering with Button Click - Option3</h2>
      <button onClick={fetchData}>Fetch Post</button>
      {loading && <p>Loading...</p>}
      {data && (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}

export default FetchOnButton;
