import styled from 'styled-components';
import { device } from './device';

export const PageContainer = styled.div`
  display: flex;

  @media ${device.mobileM}{
  flex-direction:column;
  }
`;
