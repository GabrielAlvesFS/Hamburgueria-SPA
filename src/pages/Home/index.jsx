import { useState, useEffect } from 'react';
import { HomeStyle, StyledLink } from './style';
import { Button } from '../../components/Button/style';
import { Loading } from '../../components/Loading';

export function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);
  return (
    <>
      {loading === false ? (
        <HomeStyle>
          <h1>Home</h1>
          <StyledLink to="/Burguers">
            <Button>Cardápio</Button>
          </StyledLink>
        </HomeStyle>
      ) : (
        <Loading />
      )}
    </>
  );
}
