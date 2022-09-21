import api from './api';

export async function cadastrarPedido(reqBody) {
  try {
    const res = await api.post('/pedidos', reqBody, {
      headers: { 'Content-Type': 'application/json' },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function cadastrarItemPedido(reqBody) {
  try {
    const res = await api.post('/itemPedido', reqBody, {
      headers: { 'Content-Type': 'application/json' },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function alterarItemPedido(reqBody, pedidoId, itemPedidoId) {
  try {
    const res = await api.put(`/itemPedido/${pedidoId}/${itemPedidoId}`, reqBody, {
      headers: { 'Content-Type': 'application/json' },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function deleteItemPedido(pedidoId, itemPedidoId) {
  try {
    const res = await api.delete(`/itemPedido/${pedidoId}/${itemPedidoId}`, {
      headers: { 'Content-Type': 'application/json' },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
