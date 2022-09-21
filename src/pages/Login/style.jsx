import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../styles/device';

export const LoginStyle = styled.main`
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
}

.imageContainer img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.loginContainer{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
}

.loginContainer .formContainer{
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.75rem;
}
.logIn{
  margin-top: 20px;
}
.logInGoogle{
  background-color: #1A202C;
  display: flex;
  align-items: center;
}
.logInGoogle img{
  height: 40px;
  align-items: center;
  padding-right: 8px;
  padding-left: 25px;
  padding-top: 4px;
 }

.cadastro{
  margin-top: 1.8rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

@media ${device.laptop}{

  .imageContainer  {

  display: none;

  }

  .loginContainer{
    width: 100%;
    border-radius: 00px;
  }
}

@media ${device.tablet}{

.container{
  width: 100%;
  height: 100%;
}

.loginContainer{
  border-radius: 00px;
}
}

`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
