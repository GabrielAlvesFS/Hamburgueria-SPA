import { StyledLi, StyledLink } from './style';

export const MenuCard = ({ text, image }) => (
  <StyledLi>
    <StyledLink to={`/${text}`}>
      <img src={image} alt={`logo clicável de ${text}`} />
      <p>
        {text}
      </p>
    </StyledLink>
  </StyledLi>
);
