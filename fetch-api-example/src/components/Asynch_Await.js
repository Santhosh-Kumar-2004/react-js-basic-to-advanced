import React, { useState, useEffect } from 'react';

function DataFetcherAsyAwai() {
  // State to hold fetched data
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);  // To handle loading state
  const [error, setError] = useState(null);  // To handle errors

  // Function to fetch data from an API using async/await
  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Fetching data from the API
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();  // Parse the JSON response
      setData(data);  // Update the state with fetched data
    } catch (error) {
      setError(error.message);  // If there's an error, update error state
    } finally {
      setLoading(false);  // Set loading to false once the fetch is done
    }
  };

  // Using useEffect to call fetchData once the component mounts
  useEffect(() => {
    fetchData();
  }, []);  // Empty array means this effect runs only once when the component mounts

  // Loading, error, or data rendering
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Fetching Data using the Asynch function and Await keyword</h2>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetcherAsyAwai;
