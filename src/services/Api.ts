import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://taste-match-api.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default Api;