import { useMemo, createContext, useState } from 'react';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [productsCart, setProductsCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [order, setOrder] = useState(false);

  const calculateTotal = () => {
    const values = [];
    if (productsCart.length > 0) {
      productsCart.forEach((product) => {
        values.push(product.valor);
      });
      const total = values.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0,
      );
      const totalFixed = total.toFixed(2);
      setCartTotal(totalFixed);
    }
  };

  function removeProductToCart(produto) {
    const newProductsCart = [...productsCart];

    const itens = newProductsCart.filter(
      (product) => product.id === produto.id,
    );

    if (itens && itens.length > 1) {
      newProductsCart.splice(newProductsCart.lastIndexOf(produto), 1);

      setProductsCart(newProductsCart);
    } else {
      const arrayFiltered = newProductsCart.filter(
        (product) => product.id !== produto.id,
      );
      setProductsCart(arrayFiltered);
    }
  }

  const uniqueProducts = () => {
    const uniqueProd = [];
    productsCart.forEach((cartProduct) => {
      if (uniqueProd.indexOf(cartProduct) === -1) {
        uniqueProd.push(cartProduct);
      }
    });
    return uniqueProd;
  };

  const addToCart = (product) => {
    setProductsCart([...productsCart, product]);
  };

  const confirmOrder = () => {
    setOrder([order, true]);
  };

  const fns = useMemo(() => ({
    productsCart,
    calculateTotal,
    uniqueProducts,
    addToCart,
    cartTotal,
    removeProductToCart,
    confirmOrder,
    order,
  }));

  return (
    <CartContext.Provider
      value={fns}
    >
      {children}
    </CartContext.Provider>
  );
}
