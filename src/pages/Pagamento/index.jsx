import { useEffect } from 'react';
import { PageContainer } from '../../styles/style';
import { Payment } from '../../components/Payment';
import Cart from '../../components/Cart';

export function Pagamento() {
  useEffect(() => {
    document.title = 'Kámen - Meu Pedido';
  }, []);
  return (
    <PageContainer>
      <Payment />
      <Cart post />
    </PageContainer>

  );
}
