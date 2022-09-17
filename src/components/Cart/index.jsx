import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/cart";
import ItemCart from "../CartItem/index";
import { CartSection, CartContent, TotalCart } from "./style";
import { Button } from "../Button/style";

export default function Cart() {
  const {
    productsCart = [],
    uniqueProducts,
    addToCart,
    removeProductToCart,
    calculateTotal,
    cartTotal,
  } = useContext(CartContext);

  useEffect(() => calculateTotal(), [productsCart]);
  const uniqueProd = uniqueProducts();

  return (
    <div>
      <CartSection>
        <h2>Seu pedido</h2>
        {productsCart.length > 0 ? (
          <CartContent>
            {uniqueProd.map((product) => (
              <ItemCart
                product={product}
                productsCart={productsCart}
                addToCart={addToCart}
                checkRemove={removeProductToCart}
              />
            ))}
            <TotalCart>
              <span>Total </span>
              <p>R$ {cartTotal}</p>
            </TotalCart>
            <Button className="Button_finalizar" width={500}>
              Finalizar
            </Button>
          </CartContent>
        ) : (
          <CartContent>
            <div className="Cart-sacolaVazia">
              <h4>Seu carrinho ainda está vazio</h4>
              <span>Adicione seus itens</span>
            </div>
          </CartContent>
        )}
      </CartSection>
    </div>
  );
}
