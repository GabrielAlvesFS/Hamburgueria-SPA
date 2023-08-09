import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hamburgueria-rest-api.cyclic.app/v1',
});

export default api;
