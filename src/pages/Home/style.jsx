import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HomeBackground from '../../assets/Home.png';

export const HomeStyle = styled.div`
  background-image: url(${HomeBackground});
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1, p {
    color: white;
  }

  h1 {
    font-size: 60px;
    margin: 15px;
    font-weight: 500;
  }

  p {
    font-size: 23px;
    margin-bottom: 30px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
