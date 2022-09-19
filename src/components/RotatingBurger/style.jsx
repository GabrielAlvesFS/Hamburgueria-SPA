import styled from 'styled-components';

export const LoadingImageContainer = styled.div`
  width: 100px;
  height: 100px;
  img {
    animation: rotation 2s infinite linear;
    max-height: 100px;
    max-width: 100px;
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
