import { SideMenu } from '../../components/SideMenu';
import { Itens } from '../../components/Itens';
import Cart from '../../components/Cart';
import { PageContainer } from '../../styles/style';

export const Bebidas = () => (
  <PageContainer>
    <SideMenu />
    <Itens
      itemType="Bebidas"
      title="Bebidas 🍹"
    />
    <Cart />
  </PageContainer>

);
