import Burger from '../../assets/burger.svg';
import { LoadingImageContainer } from './style';

export const RotatingBurger = () => (
  <LoadingImageContainer>
    <img src={Burger} alt="Hambúrguer rodando enquanto a página carrega" />
  </LoadingImageContainer>
);
