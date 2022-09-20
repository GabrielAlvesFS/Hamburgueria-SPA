import { PageContainer } from '../../styles/style';
import { Payment } from '../../components/Payment';
import Cart from '../../components/Cart';

export function Pagamento() {
  return (
    <PageContainer>
      <Payment />
      <Cart post />
    </PageContainer>

  );
}
