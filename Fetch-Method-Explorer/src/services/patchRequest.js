export const partiallyUpdatePost = async (postId, updatedFields) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`; // Target specific post
  
    try {
      const response = await fetch(url, {
        method: 'PATCH', // PATCH method for partial updates
        headers: {
          'Content-Type': 'application/json', // Specify JSON format
        },
        body: JSON.stringify(updatedFields), // Convert partial updates to JSON string
      });
  
      if (!response.ok) {
        throw new Error(`Failed to update post with ID ${postId}. Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Successfully patched post:', result);
      return result; // Return the result for further use
    } catch (error) {
      console.error('Error patching post:', error);
      return null; // Return null in case of an error
    }
  };
  