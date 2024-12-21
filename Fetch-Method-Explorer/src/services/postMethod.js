// postMethod.js

export const fetchPostData = async (url, payload) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer your-token-here",
        "Accept": "application/json",
        "Cache-Control": "no-cache",
        "X-Custom-Header": "MyCustomValue",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Parse the response
    return data; // Return the response data
  } catch (error) {
    console.error("Error posting data:", error);
    return null; // Return null in case of an error
  }
};
