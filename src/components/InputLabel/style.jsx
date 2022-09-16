import styled from 'styled-components';

export const InputLabelStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props?.gap ? `${props?.gap}px` : '12px')};


  label {
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #000000;
  }

  input {
    width: ${(props) => (props?.inputWidth ? `${props?.inputWidth}px` : '600px')};
    height: ${(props) => (props?.inputHeight ? `${props?.inputHeight}px` : '50px')};
    padding-left: 14px;
    padding-right: 14px;
    border-radius: 8px;
    border: 1px solid #dadada;
  }

  input::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #848484;
  }
`;
