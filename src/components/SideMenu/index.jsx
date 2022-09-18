import { MenuCard } from '../MenuCard';
import { MenuCardContainer } from './style';

import Aperitivos from '../../assets/aperitivos.svg';
import Bebidas from '../../assets/bebidas.svg';
import Burguers from '../../assets/burguers.svg';
import Sobremesas from '../../assets/sobremesas.svg';
import User from '../../assets/user.png';

export const SideMenu = () => (
  <aside>
    <nav>
      <MenuCardContainer>
        <MenuCard
          className="userCard"
          text="Login"
          image={User}
        />
        <MenuCard
          text="Burguers"
          image={Burguers}
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
          text="Bebidas"
          image={Bebidas}
        />
      </MenuCardContainer>
    </nav>
  </aside>
);
