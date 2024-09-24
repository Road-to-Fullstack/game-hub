import axios from "axios";


// Create an in-memory cache object
const cache = new Map<string, { timestamp: number; response: any }>();


const apiClient = axios.create({
    baseURL: 'https://www.giantbomb.com/api/games/',
    params: {
        api_key: '9d02938d72c205aa3c8b9a01568fd78f41dd08d9', // Correct parameter name
        format: 'json', // Optional: You can specify the format here if required
    }
});


// Function to check the in-memory cache
const getCachedData = (url: string) => {
    const cachedData = cache.get(url);
    if (cachedData) {
      const now = new Date().getTime();
  
      // Check if the cached data is within the expiry limit (e.g., 15 minutes)
      if (now - cachedData.timestamp < 15 * 60 * 1000) {
        console.log("Returning cached response from memory");
        return cachedData.response;
      } else {
        // Remove expired data
        cache.delete(url);
      }
    }
    return null;
  };

  // Function to set new cache data
const cacheResponse = (url: string, response: any) => {
    const cachedData = {
      timestamp: new Date().getTime(),
      response,
    };
    cache.set(url, cachedData); // Cache the new response in memory
  };
  
  // Wrapper around axios to implement caching
  const apiClientWithCache = async (url: string, options = {}) => {
    const cachedData = getCachedData(url);
  
    if (cachedData) {
      return cachedData; // Return cached response if available
    }
  
    // If no cache, make an API call
    try {
      const response = await apiClient.get(url, options);
      cacheResponse(url, response); // Cache the new response
      return response;
    } catch (error) {
      throw error;
    }
  };

  export default apiClientWithCache;