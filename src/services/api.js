import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hamburguer-api.herokuapp.com/',
});

export default api;
