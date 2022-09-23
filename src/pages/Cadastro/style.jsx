import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../styles/device';

export const CadastroStyle = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: aliceblue;

  .container{
    display: flex;
    width: 90%;
    height: 90%;
    border-radius: 16px;
    box-shadow: 0px 10px 10px 0px #00000040;
  }

  .imageContainer{
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    width: 50%;
    height: 100%;
    background-color: whitesmoke;
  }

  .imageContainer img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }

  .cadastroContainer{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    background-color: white;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }

  .cadastroContainer .formContainer{
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.75rem;
  }

  .formContainer .titleContainer{
    align-self: flex-start;
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    gap: 1rem;
  }

  .formContainer .titleContainer .line{
    width: 2px;
    height: 40px;
    background-color: #000;
    color: #000;
  }

  .formContainer .titleContainer .title{
    width: 100%;
    font-size: 26px;
    font-weight: 700;
    line-height: 33px;
    text-align: left;
  }

  .formContainer .signupBtn{
    margin-top: 1.8rem;
  }

  .formContainer .loginContainer{
    margin-top: 1.8rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .formContainer .loginContainer .loginBtn{
    border: 1px solid #000;
    box-shadow: none;
    font-weight: 400;
  }

  @media (${device.laptop}) {
    .imageContainer{
      display: none;
    }

    .cadastroContainer{
      width: 100%;
      border-radius: 16px;
    }
  }

   @media (${device.tablet}) {
    .container{
      width: 100%;
      height: 100%;
    }

    #input{
      width: 350px;
    }

    .cadastroContainer{
      border-radius: 0px;
    }

  }

  @media ${device.mobileM}{
    font-size:14px;

    input{
      width:100%;
      font-size:14px;
    }

    button{
      font-size:15px;
    }
  }

`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
