import { useEffect } from 'react';
import { ShoppingCart } from 'react-feather';
import { SideMenu } from '../../components/SideMenu';
import { Itens } from '../../components/Itens';
import Cart from '../../components/Cart';
import { PageContainer } from '../../styles/style';
import { ShoppingCartIcon } from '../../components/ShoppingCartIcon';

export const Aperitivos = () => {
  useEffect(() => {
    document.title = 'Kámen Burguers';
  }, []);
  return (
    <PageContainer>
      <SideMenu />
      <Itens
        itemType="Aperitivos"
        title="Aperitivos 🍟"
      />
      <Cart />
      <ShoppingCartIcon />
    </PageContainer>
  );
};
