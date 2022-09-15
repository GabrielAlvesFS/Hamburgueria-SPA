import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLi = styled.li`
  list-style-type: none;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin: 10px 0 10px 0;
  padding: 10px;
  width: 100px;
  border-radius: 4px;
  &:hover {
    background-color: #ecb9378a;
  }

  &:focus {
    background-color: #ecb9378a;
  }

  img {
    max-height: 100px;
  }

  p {
    color: black;
    font-size: 14px;
    margin-top: 5px;
  }

`;
