import styled from 'styled-components';
import { device } from '../../styles/device';

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

  @media ${device.laptopL}{
    min-width: 550px;
    max-width: 550px;
  }

  @media  ${device.laptop}{
    padding: 5rem 1rem;
    min-width: 70vw;
    max-width: 70vw;
    align-self:center;
    display: ${(props) => (props?.display ? 'block' : 'none')};
    button{
      width:100%;
    }
  }
  @media  ${device.tablet}{
    padding: 6rem 1rem;
    max-width: 60rem;
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
export const Finalizando = styled.section`
  h2{
    text-align: center;
  }

  section{
    justify-content: center;
    font-size:30px;
  }

  .buttonsContainer{
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

`;
