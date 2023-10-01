import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL; // Replace with your API's base URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchTests = async ({limit=100, page=1}) => {
  try {
    // "page": 1,
    //   "limit": 10,
    //   "totalPages": 1,
    //   "totalResults": 2
    const response = await api.get(`/essay?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};

export const searchTestsByTitle = async ({ keyword, limit=10, page=1 } ) => {
  try {
    const response = await api.get(`/essay/search?search=${keyword}&page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error searching for tests:', error.message);
    throw error;
  }
};

export const fetchTest = async (id) => {
  try {
    // "page": 1,
    //   "limit": 10,
    //   "totalPages": 1,
    //   "totalResults": 2
    const response = await api.get(`/essay/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};
