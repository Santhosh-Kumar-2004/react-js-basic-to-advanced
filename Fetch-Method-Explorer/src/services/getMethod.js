// getMethod.js

export const fetchGetData = async (url) => {
    try {
      const response = await fetch(url); // Perform the GET request
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`); // Handle non-200 responses
      }
      const data = await response.json(); // Parse the response as JSON
      return data; // Return the data
    } catch (error) {
      console.error("Error fetching data:", error); // Handle errors gracefully
      return null; // Return null if there's an error
    }
  };
  