import { MenuCardLi, MenuCardLink } from './style';

export const MenuCard = ({ text, image }) => (
  <MenuCardLi>
    <MenuCardLink to={`/${text}`}>
      <img src={image} alt={`logo clicável de ${text}`} />
      <p>
        {text}
      </p>
    </MenuCardLink>
  </MenuCardLi>
);
