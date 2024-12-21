export const deletePost = async (postId) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`; // Target specific post
  
    try {
      const response = await fetch(url, {
        method: 'DELETE', // DELETE method to remove the resource
        headers: {
          'Content-Type': 'application/json', // Specify JSON format
        },
      });
  
      if (!response.ok) {
        throw new Error(`Failed to delete post with ID ${postId}. Status: ${response.status}`);
      }
  
      console.log(`Post with ID ${postId} deleted successfully.`);
      return { message: `Post with ID ${postId} deleted successfully.` }; // Return success message
    } catch (error) {
      console.error('Error deleting post:', error);
      return null; // Return null in case of an error
    }
  };
  