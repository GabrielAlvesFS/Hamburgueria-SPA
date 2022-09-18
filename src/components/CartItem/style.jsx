import styled from "styled-components";

export const CartItem = styled.section`
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid lightgray;

  h3 {
    flex-grow: 1;
    padding: 0 20px;
  }

  p {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: red;
  }
`;

export const ItemQuantity = styled.section`
  display: flex;
  align-items: center;
  padding-right: 40px;

  button {
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
    background: none;
    border: 0;
    &:hover {
      outline: 0;
    }
  }

  span {
    font-weight: 500;
    font-size: 18px;
    color: red;
    width: 28px;
    text-align: center;
  }
`;

export const ContainerImg = styled.section`
  width: 81px;
  height: 66px;

  img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;
