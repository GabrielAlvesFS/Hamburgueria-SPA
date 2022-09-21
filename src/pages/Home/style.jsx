import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HomeBackground from '../../assets/Home.png';
import HomeMobile from '../../assets/HomeMobile.png';
import { device } from '../../styles/device';

export const HomeStyle = styled.div`
  background-image: url(${HomeBackground});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1, p {
    margin: 0px 20px 0px 20px;
    color: white;
    text-align: center;
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

  @media ${device.mobileL} {
    background-image: url(${HomeMobile});
    background-size: auto 100%;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
