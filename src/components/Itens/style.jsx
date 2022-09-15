import styled from 'styled-components';

export const ItensStyle = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  .itensContainer{
    gap: 3.5rem;
    width: fit-content;
    display: flex;
    flex-direction: column;
  }

  .title{
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
  }

  .itens{
    width: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 270px);
    gap: 2rem;
  }
`;
