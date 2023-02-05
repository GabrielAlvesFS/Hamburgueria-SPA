import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hamburgueria-api.up.railway.app/',
});

export default api;
