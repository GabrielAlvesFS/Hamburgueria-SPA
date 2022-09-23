import styled from 'styled-components';
import { device } from './device';

export const PageContainer = styled.div`
  display: flex;

  @media ${device.laptop}{
    flex-direction:column;
  }
`;
