import React, { useEffect, useState } from 'react';
import { CartItem, ItemQuantity, ContainerImg } from './style';

export default function ItemCart({
  product,
  productsCart,
  addToCart,
  checkRemove,
  finish,
}) {
  const [quantItens, setQuantItens] = useState('1');

  const qtdItens = (currentProd) => {
    const filterItens = productsCart.filter(
      (cartProduct) => cartProduct === currentProd,
    );

    setQuantItens(filterItens.length);
  };

  useEffect(() => qtdItens(product), [productsCart]);

  return (
    product && (
      <>
        <CartItem id={product.id}>
          {!finish ? (
            <>
              <ItemQuantity>
                <button type="button" onClick={() => checkRemove(product)}>-</button>
                <span>{quantItens}</span>
                <button type="button" onClick={() => addToCart(product)}>+</button>
              </ItemQuantity>
              <ContainerImg>
                <img src={product.url_img} alt={product.nome} />
              </ContainerImg>
              <h3>{product.nome}</h3>
              <p>
                {' '}
                R$
                {' '}
                {product.valor.toFixed(2)}
              </p>
            </>
          ) : (
            <>
              <ItemQuantity>
                <span>
                  {quantItens}
                  X
                </span>
              </ItemQuantity>
              <ContainerImg>
                <img src={product.url_img} alt={product.nome} />
              </ContainerImg>
              <h3>{product.nome}</h3>
              <p>
                {' '}
                R$
                {' '}
                {product.valor.toFixed(2)}
              </p>
            </>
          )}

        </CartItem>
      </>
    )
  );
}
