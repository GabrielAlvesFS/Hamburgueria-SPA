import { Link } from 'react-router-dom';
import Cart from '../../components/Cart';
import { PageContainer } from '../../styles/style';

export const Carrinho = () => (
  <PageContainer>
    <Link to="/Burguers">
      <p className="returnPage"> ← VOLTAR</p>
    </Link>
    <Cart show />
  </PageContainer>
);
