import api from './api';

export async function listarItens() {
  const res = await api.get('/item');
  return res.data;
}
