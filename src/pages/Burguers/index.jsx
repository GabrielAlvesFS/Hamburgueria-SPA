import { SideMenu } from '../../components/SideMenu';
import { Itens } from '../../components/Itens';
import Cart from '../../components/Cart';
import { BurguersStyle } from './style';

export const Burguers = () => (
  <BurguersStyle>
    <SideMenu />
    <Itens
      itemType="Hambúrguer"
      title="Burguers 🍔"
    />
    <Cart />
  </BurguersStyle>

);
