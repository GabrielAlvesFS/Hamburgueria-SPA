import styled from 'styled-components';
import { device } from '../../styles/device';

export const MenuCardContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  gap: 20px;

  @media ${device.mobileM}{
    flex-direction: row;
    height: fit-content;
    justify-content: unset;
    margin: 10px;
    gap: 20px;
    min-width: 375px;
    max-width: 375px;
  }
`;
