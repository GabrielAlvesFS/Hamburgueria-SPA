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
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// const itemPedidoBody = {
//   pedido_id: 4,
//   item_id: 3,
//   quantidade_itens: 1,
// };

// cadastrarItemPedido(itemPedidoBody);

// const pedidoBody = {
//   cliente_id: 404,
//   entregador_id: 404,
//   data_pedido: '0404-04-04',
//   metodo_pagamento: 'dinheiro',
// };

// cadastrarPedido(pedidoBody);
