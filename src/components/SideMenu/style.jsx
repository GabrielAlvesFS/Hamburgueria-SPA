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
    justify-content: space-between;
    margin: 5px;
    gap: 20px;
    min-width: 365px;
    max-width: 365px;

  }
`;
