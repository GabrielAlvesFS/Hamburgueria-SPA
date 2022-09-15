import styled from 'styled-components';

export const ItemCardStyle = styled.div`
  background-color: ${(props) => (props.bg ? props.bg : '#FFFFFF')};
  width: 270px;
  height: 350px;
  padding-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px #00000040;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &:hover{
    box-shadow: 0px 10px 10px 0px #00000040;
  }

  .imageContainer{
    width: 270px;
    height: 145px;
  }

  .imageContainer img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .title{
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    width: 240px;
  }

  .description{
    font-size: 12px;
    font-weight: 300;
    line-height: 18px;
    width: 240px;
    height: 105px;
    overflow-y: scroll;
    color: #848484;
  }

  .description::-webkit-scrollbar {
    width: 2px;
    background: transparent
  }

  .priceContainer{
    width: 240px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .priceContainer .price{
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    width: 174px;
    color: #FDC844;
  }

  .priceContainer .addCart{
    width: 145px;
    font-size: 14px;
    font-weight: 400;
    background-color: #FF2351;
    color: white;
    padding: 2px;
    border: none;
    border-radius: 4px;
    cursor: pointer
  }

  .priceContainer .addCart:hover{
    border: 1px solid black;
  }

`;
