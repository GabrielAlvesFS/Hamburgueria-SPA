import { SideMenu } from '../../components/SideMenu';
import { Itens } from '../../components/Itens';
import Cart from '../../components/Cart';
import { PageContainer } from '../../styles/style';

export const Aperitivos = () => (
  <PageContainer>
    <SideMenu />
    <Itens
      itemType="Aperitivos"
      title="Aperitivos 🍟"
    />
    <Cart />
  </PageContainer>

);
