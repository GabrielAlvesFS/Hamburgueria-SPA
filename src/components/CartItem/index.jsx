import React, { useEffect, useState } from "react";
import { CartItem, ItemQuantity, ContainerImg } from "./style";

export default function ItemCart({
  product,
  productsCart,
  addToCart,
  checkRemove,
}) {
  const [quantItens, setQuantItens] = useState("1");

  const qtdItens = (product) => {
    const filterItens = productsCart.filter(
      (cartProduct) => cartProduct === product
    );

    setQuantItens(filterItens.length);
  };

  useEffect(() => qtdItens(product), [productsCart]);

  return (
    product && (
      <CartItem id={product.id}>
        <ItemQuantity>
          <button onClick={() => checkRemove(product)}>-</button>
          <span>{quantItens}</span>
          <button onClick={() => addToCart(product)}>+</button>
        </ItemQuantity>
        <ContainerImg>
          <img src={product.url_img} alt={product.nome} />
        </ContainerImg>
        <h3>{product.nome}</h3>
        <p> R$ {product.valor.toFixed(2)}</p>
      </CartItem>
    )
  );
}
