import { HomeStyle, StyledLink } from './style';
import { Button } from '../../components/Button/style';

export function Home() {
  return (
    <HomeStyle>
      <h1>Home</h1>
      <StyledLink to="/Burguers">
        <Button>Cardápio</Button>
      </StyledLink>
    </HomeStyle>
  );
}
