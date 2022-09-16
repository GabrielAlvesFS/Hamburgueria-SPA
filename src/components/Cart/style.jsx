import styled from "styled-components";

export const CartSection = styled.section`
  background: white;
  width: 600px;
  height: 100vh;
  min-width: 600px;
  padding: 30px 30px 100px 30px;
  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 50px;
    font-weight: 600;
    font-size: 24px;
  }
  .Button_finalizar {
    margin-top: 4em;
  }
`;
export const CartContent = styled.div`
  flex-grow: 1;
  overflow: auto;

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
  margin-top: 2rem;
  display: flex;

  p {
    color: red;
    padding-left: 30px;
  }

  button {
    width: 397px;
    margin: 20px auto;
    background-color: red;
    color: white;
  }
`;
