import React from "react";
import { useState, useEffect } from "react";
import PostsList from "../src/components/PostsList.js"; // Import the new component
import FetchOnButton from "./components/FetchOnButton.js";
import PostData from "./components/PostData.js";
import GetData from "./components/GetData.js";
import EditDeleteData from "./components/EditDeleteData.js";
import DataFetcherAsyAwai from "./components/Asynch_Await.js";

function App() {
   // Step 1: Create a state to store the data
   const [data, setData] = useState(null);

   // Step 2: Use `useEffect` to fetch data when the component loads
   useEffect(() => {
     // Fetch data from a public API
     fetch("https://jsonplaceholder.typicode.com/posts/1") // Example API
       .then((response) => {
         // Step 3: Check if the response is OK
         if (!response.ok) {
           throw new Error("Network response was not OK");
         }
         return response.json(); // Convert response to JSON
       })
       .then((data) => {
         // Step 4: Save the fetched data to state
         setData(data);
       })
       .catch((error) => {
         console.error("Fetch error:", error); // Log any error
       });
   }, []); // Empty dependency array ensures this runs once when the component mounts
 
  return (
    <>
      <div>
      <h1>Simple Fetching a Data From an API - Option1</h1>
      {data ? (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      </div>
      <hr />
      <div>
        <h1>Fetching a List of Data from an API - Option2</h1>
        <h3>Single Post</h3>
        {/* Existing code to display a single post */}
        <div>
          <h2>Post Title</h2>
          <p>Post Body</p>
        </div>
        {/* Render the PostsList component */}
        <PostsList />
        <hr />
        <FetchOnButton/>
        <hr />
        <PostData/>
        <hr />
        <GetData/>
        <hr />
        <EditDeleteData/>
        <hr />
        <DataFetcherAsyAwai/>
      </div>
    </>
  );
}

export default App;
