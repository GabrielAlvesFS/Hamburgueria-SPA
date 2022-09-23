import styled from 'styled-components';
import { device } from '../../styles/device';

export const MenuCardContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  gap: 20px;

  @media ${device.laptop}{
    flex-direction: row;
    width: 100%;
    height: 106px;
  }

  @media ${device.tablet}{
    flex-direction: row;
    width: 100%;
    height: 106px;
    overflow-x: scroll;
  }

  @media (max-width: 600px){
    justify-content: flex-start;
  }


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
