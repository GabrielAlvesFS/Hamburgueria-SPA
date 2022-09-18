import styled from 'styled-components';

export const CartSection = styled.section`
  background: white;
  min-width: 600px;
  max-width: 600px;
  height: 100vh;
  padding: 30px 20px 50px 20px;
  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 20px;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }
  .Button_finalizar {
    min-height: 50px;
    align-self: center;
  }
`;

export const CartContent = styled.div`
  flex-grow: 1;
  overflow: auto;
  margin-top: 31px;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
  }

  /* &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar {
    width: 12px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
  } */

  .Cart-sacolaVazia {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 175px;
    justify-content: center;
    gap: 16px;
  }
`;

export const TotalCart = styled.section`
  font-weight: 600;
  font-size: 18px;
  justify-content: flex-end;
  align-items: center;
  margin: 3rem 0;
  padding-right: 1.4rem;
  display: flex;

  p {
    color: red;
    padding-left: 30px;
  }
`;
