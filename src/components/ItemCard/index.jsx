import { toast } from 'react-toastify';
import { useContext } from 'react';
import { ItemCardStyle } from './style';
import { CartContext } from '../../context/cart';

export function ItemCard({
  image, title, description, price, bg, product,
}) {
  const {
    addToCart,
  } = useContext(CartContext);

  const notify = () => {
    toast.success('Item Adicionado ao Carrinho!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    });
  };

  return (
    <ItemCardStyle bg={bg}>
      <div className="imageContainer">
        <img src={image} alt={title} />
      </div>
      <p className="title">{title}</p>
      <span className="description">{description}</span>
      <div className="priceContainer">
        <p className="price">{`R$ ${price}`}</p>
        <button type="button" className="addCart" onClick={() => { addToCart(product); notify(); }}>Adicionar</button>
      </div>
    </ItemCardStyle>
  );
}
