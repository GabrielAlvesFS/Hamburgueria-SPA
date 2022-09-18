import { SideMenu } from '../../components/SideMenu';
import { Itens } from '../../components/Itens';
import Cart from '../../components/Cart';
import { PageContainer } from '../../styles/style';

export const Burguers = () => (
  <PageContainer>
    <SideMenu />
    <Itens
      itemType="Hambúrguer"
      title="Burguers 🍔"
    />
    <Cart />
  </PageContainer>

);
