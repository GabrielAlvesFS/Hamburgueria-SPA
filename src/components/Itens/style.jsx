import styled from 'styled-components';
import { device } from '../../styles/device';

export const ItensStyle = styled.main`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  background-color: #E5E5E5;

  &::-webkit-scrollbar {
    width: 2px;
    background: transparent
  }

  .itensContainer{
    gap: 3.5rem;
    width: fit-content;
    display: flex;
    flex-direction: column;
  }

  .titleContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .titleContainer .title{
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
  }

  .search {
    position: relative;
  }

  .search .searchIcon {
    position: absolute;
    top: calc(50% - 12px);
    right: 12px;
  }

  .itens{
    width: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 270px);
    gap: 2rem;
    padding-bottom: 2rem;
  }

  @media ${device.laptopL}{
    .itens{
      grid-template-columns: repeat(2, 270px);
    }
  }

  @media (max-width: 600px){
    .itens{
      grid-template-columns: 270px;
    }

    .titleContainer {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
    }
  }
  `;
