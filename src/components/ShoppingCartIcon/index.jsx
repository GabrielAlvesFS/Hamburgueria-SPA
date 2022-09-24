import React, { useContext } from 'react';
import { ShoppingCart } from 'react-feather';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cart';
import { ShoppingIcon } from './style';

export const ShoppingCartIcon = () => {
  const {
    productsCart,
  } = useContext(CartContext);
  return (
    <Link to="/Carrinho">
      <ShoppingIcon>
        <ShoppingCart className="icon" />
        {productsCart.length ? <span>{productsCart.length}</span> : ''}
      </ShoppingIcon>
    </Link>
  );
};
