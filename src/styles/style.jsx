import styled from 'styled-components';
import { device } from './device';

export const PageContainer = styled.div`
  display: flex;

  @media ${device.laptop}{
    flex-direction:column;
    .returnPage {
  position: absolute;
  width: 200px;
  height: 40px;
  left: 60px;
  top: 20px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 36px;
  color: black;

}
  }
`;
