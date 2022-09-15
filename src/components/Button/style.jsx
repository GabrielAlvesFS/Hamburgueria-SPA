import styled from 'styled-components';

export const Button = styled.button`
  width: ${(props) => (props?.width ? `${props?.width}px` : '300px')};
  height: ${(props) => (props?.height ? `${props?.height}px` : '40px')};
  background-color:  ${(props) => (props?.bgCor ? props?.bgCor : '#FF2351')};
  color:  ${(props) => (props?.cor ? props?.cor : '#fff')};
  font-size: ${(props) => (props?.fontSize ? `${props?.fontSize}px` : '18px')};
  font-weight: 600;
  text-align: center;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover{
    box-shadow: 0px 2px 2px 0px #00000058;
    transform: translateY(-1.5px);
  }
`;
