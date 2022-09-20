import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cart';
import ItemCart from '../CartItem/index';
import {
  CartSection, CartContent, TotalCart, Finalizando,
} from './style';
import { Button } from '../Button/style';

export default function Cart({ post }) {
  const {
    productsCart,
    uniqueProducts,
    addToCart,
    removeProductToCart,
    calculateTotal,
    cartTotal,
    order,
  } = useContext(CartContext);

  useEffect(() => calculateTotal(), [productsCart]);
  const uniqueProd = uniqueProducts();
  const [togle, setTogle] = useState(true);
  const handleTogle = (t) => setTogle(!t);

  return (
    <>
      <CartSection>
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
                  <h2>Seu pedido está sendo preparado...</h2>
                  <Button onClick={() => handleTogle(togle)}>
                    Editar pedido
                  </Button>
                  <Button>
                    Cancelar pedido
                  </Button>
                </Finalizando>
              </>
            )}
          </>
        )}
      </CartSection>
    </>
  );
}
