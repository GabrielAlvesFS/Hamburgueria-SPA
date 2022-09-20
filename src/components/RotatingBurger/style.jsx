import styled from 'styled-components';

export const LoadingImageContainer = styled.div`
  width: 120px;
  height: 120px;
  img {
    animation: rotation 2s infinite linear;
    max-height: 120px;
    max-width: 120px;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
