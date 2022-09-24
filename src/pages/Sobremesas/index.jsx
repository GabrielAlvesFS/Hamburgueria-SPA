import { useEffect } from 'react';
import { SideMenu } from '../../components/SideMenu';
import { Itens } from '../../components/Itens';
import Cart from '../../components/Cart';
import { PageContainer } from '../../styles/style';
import { ShoppingCartIcon } from '../../components/ShoppingCartIcon';

export const Sobremesas = () => {
  useEffect(() => {
    document.title = 'Kámen Burguers';
  }, []);
  return (
    <PageContainer>
      <SideMenu />
      <Itens
        itemType="Sobremesa"
        title="Sobremesas 🍰"
      />
      <Cart />
      <ShoppingCartIcon />
    </PageContainer>

  );
};
