import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CartContext } from '../../context/cart';
import ItemCart from '../CartItem/index';
import {
  CartSection, CartContent, TotalCart, Finalizando,
} from './style';
import { Button } from '../Button/style';
import { alterarItemPedido, deleteItemPedido } from '../../services/pedidosApi';

export default function Cart({ post, show }) {
  const {
    productsCart,
    setProductsCart,
    uniqueProducts,
    addToCart,
    removeProductToCart,
    calculateTotal,
    cartTotal,
    setCartTotal,
    order,
    pedido,
    itemPedidoID,
    setItemPedidoID,
  } = useContext(CartContext);

  useEffect(() => calculateTotal(), [productsCart]);
  const uniqueProd = uniqueProducts();
  const [togle, setTogle] = useState(true);
  const handleTogle = (t) => setTogle(!t);
  const [edit, setEdit] = useState(false);
  const handleEdit = (current) => setEdit(!current);

  const qtdItem = (products) => {
    const result = [];

    let checkID = 0;
    products.forEach((current) => {
      let atual = current;

      if (checkID !== current.id) {
        productsCart.forEach((currentProd) => {
          if (current.id === currentProd.id) {
            atual = { ...atual, qtd: atual.qtd + 1 };
            checkID = currentProd.id;
          }
        });

        result.push(atual);
      }
    });

    return result;
  };

  const putPedido = async () => {
    handleTogle(togle);
    handleEdit(edit);

    if (edit) {
      toast.success('Pedido editado com sucesso!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });

      try {
        const products = qtdItem(uniqueProd);
        let num = 0;
        products.forEach((current) => {
          const itemPedidoBody = {
            item_id: `${current.id}`,
            quantidade_itens: `${current.qtd}`,
          };

          alterarItemPedido(itemPedidoBody, pedido, itemPedidoID[num]);
          num += 1;
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const deletePedido = async () => {
    toast.success('Pedido excluído com sucesso!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    });

    try {
      const products = qtdItem(uniqueProd);
      let num = 0;

      products.forEach(() => {
        deleteItemPedido(pedido, itemPedidoID[num]);
        num += 1;
      });

      setItemPedidoID([]);
      setProductsCart([]);
      setCartTotal(0);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CartSection display={show}>
        {(!post) ? (
          <>
            <h2>Seu pedido</h2>
            {productsCart.length > 0 ? (
              <>
                <CartContent>
                  {uniqueProd.map((product) => (
                    <ItemCart
                      product={product}
                      productsCart={productsCart}
                      addToCart={addToCart}
                      checkRemove={removeProductToCart}
                    />
                  ))}
                </CartContent>
                <TotalCart>
                  <span>Total </span>
                  <p>
                    R$
                    {' '}
                    {cartTotal}
                  </p>
                </TotalCart>
                <Link className="Button_finalizar" to="/Pagamento">
                  <Button width={400}>
                    Finalizar compra
                  </Button>
                </Link>
              </>
            ) : (
              <CartContent>
                <div className="Cart-sacolaVazia">
                  <h4>Seu carrinho ainda está vazio</h4>
                  <span>Adicione seus itens</span>
                </div>
              </CartContent>
            )}
          </>
        ) : (
          <>
            <h2>Detalhes do pedido</h2>
            {!order ? (
              <>
                <CartContent>
                  {uniqueProd.map((product) => (
                    <ItemCart
                      product={product}
                      productsCart={productsCart}
                      addToCart={addToCart}
                      checkRemove={removeProductToCart}
                      finish={togle}
                    />
                  ))}
                </CartContent>
                <Finalizando>
                  <TotalCart>
                    <span>Total </span>
                    <p>
                      R$
                      {' '}
                      {cartTotal}
                    </p>
                  </TotalCart>
                  <h2>Aguardando Confirmação...</h2>
                </Finalizando>
              </>
            ) : (
              <>
                <CartContent>
                  {uniqueProd.map((product) => (
                    <ItemCart
                      product={product}
                      productsCart={productsCart}
                      addToCart={addToCart}
                      checkRemove={removeProductToCart}
                      finish={togle}
                    />
                  ))}
                </CartContent>
                <Finalizando>
                  <TotalCart>
                    <span>Total </span>
                    <p>
                      R$
                      {' '}
                      {cartTotal}
                    </p>
                  </TotalCart>
                  <h2 className="order">Seu pedido está sendo preparado...</h2>
                  <div className="buttonsContainer">
                    <Button onClick={() => putPedido()}>
                      {
                        edit === false
                          ? 'Editar pedido'
                          : 'Confirmar edição'
                      }
                    </Button>
                    <Button onClick={() => deletePedido()}>
                      Cancelar pedido
                    </Button>
                  </div>
                </Finalizando>
              </>
            )}
          </>
        )}
      </CartSection>
    </>
  );
}
