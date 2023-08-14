import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api'; // Replace with your API's base URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchTests = async () => {
  try {
    const response = await api.get('/tests');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};