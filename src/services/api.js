import axios from 'axios';

// Create Axios instance with base URL
const api = axios.create({
  baseURL: 'https://omdbapi.com/',
  timeout: 10000,
});

// API key from environment variables
const API_KEY = import.meta.env.VITE_OMDB_API_KEY || 'thewdb';

// Debug: Log the API key (remove in production)
console.log('API Key loaded:', API_KEY ? 'Yes' : 'No');
console.log('API Key value:', API_KEY);

/**
 * Search movies by title
 * @param {string} searchQuery - Movie title to search
 * @param {number} page - Page number for pagination
 * @returns {Promise} - API response
 */
export const searchMovies = async (searchQuery, page = 1) => {
  try {
    const response = await api.get('/', {
      params: {
        apikey: API_KEY,
        s: searchQuery,
        page: page,
        type: 'movie'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

/**
 * Get movie details by ID
 * @param {string} movieId - IMDB movie ID
 * @returns {Promise} - API response with movie details
 */
export const getMovieDetails = async (movieId) => {
  try {
    const response = await api.get('/', {
      params: {
        apikey: API_KEY,
        i: movieId,
        plot: 'full'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error getting movie details:', error);
    throw error;
  }
};

/**
 * Get popular movies (using a generic search term)
 * @param {number} page - Page number
 * @returns {Promise} - API response
 */
export const getPopularMovies = async (page = 1) => {
  try {
    const response = await api.get('/', {
      params: {
        apikey: API_KEY,
        s: 'marvel',
        page: page,
        type: 'movie'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error getting popular movies:', error);
    throw error;
  }
};

export default api;
