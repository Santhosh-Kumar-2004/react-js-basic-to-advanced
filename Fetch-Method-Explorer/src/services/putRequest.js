export const updatePost = async (postId, updatedData) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`; // Endpoint for updating the resource
  
    try {
      const response = await fetch(url, {
        method: 'PUT', // HTTP method for updating the resource
        headers: {
          'Content-Type': 'application/json', // Specify JSON format
        },
        body: JSON.stringify(updatedData), // Convert the updated data to JSON string
      });
  
      if (!response.ok) {
        throw new Error(`Failed to update post with ID ${postId}. Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Successfully updated post:', result);
      return result; // Return the result for further use
    } catch (error) {
      console.error('Error updating post:', error);
      return null; // Return null in case of an error
    }
  };
  