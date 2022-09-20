import api from './api';

export async function listarItens() {
  const res = await api.get('/itens');
  return res.data;
}
