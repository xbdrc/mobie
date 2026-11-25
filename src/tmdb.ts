import axios from 'axios';

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    // Recommended: Use the Bearer token from TMDB
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
  // Optional: Set default language
  params: {
    language: 'en-US',
  },
});

export default tmdb;