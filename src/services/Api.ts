import axios from 'axios';

const Api = axios.create({
  baseURL: '/api', // usando o proxy local
  headers: {
    'Content-Type': 'application/json',
  },
});

export default Api;