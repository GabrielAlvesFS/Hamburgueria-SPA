import { MenuCard } from '../MenuCard';
import { MenuCardContainer } from './style';

import Aperitivos from '../../assets/aperitivos.svg';
import Bebidas from '../../assets/bebidas.svg';
import Burguers from '../../assets/burguers.svg';
import Sobremesas from '../../assets/sobremesas.svg';

export const SideMenu = () => (
  <aside>
    <nav>
      <MenuCardContainer>
        <MenuCard
          text="Bebidas"
          image={Bebidas}
        />
        <MenuCard
          text="Sobremesas"
          image={Sobremesas}
        />
        <MenuCard
          text="Aperitivos"
          image={Aperitivos}
        />
        <MenuCard
          text="Burguers"
          image={Burguers}
        />
      </MenuCardContainer>
    </nav>
  </aside>
);
