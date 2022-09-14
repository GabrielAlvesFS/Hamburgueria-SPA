import { ItemCardStyle } from './style';

export function ItemCard({
  image, title, description, price, bg,
}) {
  return (
    <ItemCardStyle bg={bg}>
      <div className="imageContainer">
        <img src={image} alt={title} />
      </div>
      <p className="title">{title}</p>
      <span className="description">{description}</span>
      <div className="priceContainer">
        <p className="price">{`R$ ${price}`}</p>
        <button type="button" className="addCart">Adicionar</button>
      </div>
    </ItemCardStyle>
  );
}
