import styled from 'styled-components';
import { device } from '../../styles/device';

export const ShoppingIcon = styled.div`
@media ${device.desktop}{
  display: none;
}
@media ${device.laptop}{
  display:block;
position: relative;
text-align:center;
top: 1rem;
.icon{
  width:5rem;
  height: 4rem;
  color: black;
  margin-bottom:0.5rem;
}
span{
  position: absolute;
  border-radius: 50%;
  padding: 5px 9px;
  background-color: red;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
}
}
@media ${device.laptop}{
display:block;
position: relative;
text-align:center;
top: 1rem;
.icon{
  width:5rem;
  height: 4rem;
  color: black;
  margin-bottom:0.5rem;
}
span{
  position: absolute;
  border-radius: 50%;
  padding: 5px 9px;
  background-color: red;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
}}

`;
