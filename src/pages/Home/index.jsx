import { useState, useEffect } from 'react';
import { HomeStyle, StyledLink } from './style';
import { Button } from '../../components/Button/style';
import { Loading } from '../../components/Loading';

export function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);
  useEffect(() => {
    document.title = 'Kámen Burguers';
  }, []);
  return (
    <>
      {loading === false ? (
        <HomeStyle>
          <h1>Kámen Burguers</h1>
          <p>Confira o nosso cardápio e faça já o seu pedido!</p>
          <StyledLink to="/Burguers">
            <Button>Saiba Mais</Button>
          </StyledLink>
        </HomeStyle>
      ) : (
        <Loading />
      )}
    </>
  );
}
