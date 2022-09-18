import { SideMenu } from '../../components/SideMenu';
import { Itens } from '../../components/Itens';
import Cart from '../../components/Cart';
import { PageContainer } from '../../styles/style';

export const Sobremesas = () => (
  <PageContainer>
    <SideMenu />
    <Itens
      itemType="Sobremesa"
      title="Sobremesas 🍰"
    />
    <Cart />
  </PageContainer>

);
