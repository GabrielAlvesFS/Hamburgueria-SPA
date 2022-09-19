import { RotatingBurger } from '../RotatingBurger';
import { LoadingContainer } from './style';

export const Loading = () => (
  <LoadingContainer>
    <RotatingBurger />
    <RotatingBurger />
    <RotatingBurger />
    <RotatingBurger />
    <RotatingBurger />
  </LoadingContainer>
);
