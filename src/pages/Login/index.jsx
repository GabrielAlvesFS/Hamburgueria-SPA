import { useEffect } from 'react';
import { LoginStyle, StyledLink } from './style';
import { Button } from '../../components/Button/style';
import { InputLabel } from '../../components/InputLabel';
import teste from '../../assets/google.svg';

export function Login() {
  useEffect(() => {
    document.title = 'Kámen - Login';
  }, []);

  return (

    <LoginStyle>

      <div className="container">
        <div className="imageContainer">
          <img src="./src/assets/burgerLogin.png" alt="" />
        </div>

        <div className="loginContainer">
          <form action="Burguers" className="formContainer">
            <h2 className="title">Bem vindo de volta</h2>
            <h1 className="title">Faça login na sua conta</h1>
            <InputLabel labelName="E-mail" placeholderName="Joãodasilva@gmail.com" inputWidth={350} inputHeight={50} required="true" gap={4} />
            <InputLabel labelName="Senha" placeholderName="Digite sua senha" inputWidth={350} inputHeight={50} required="true" gap={4} />
            <Button className="logIn" width={347} height={50} type="submit">Entrar</Button>

            <Button className="logInGoogle" width={347} height={50}>
              <img src={teste} alt="" />
              Ou faça login com o google
            </Button>

            <div className="cadastro">
              <span>Não tem uma conta?</span>
              <StyledLink to="/Cadastro">Faça Cadastro!</StyledLink>
            </div>
          </form>
        </div>

      </div>

    </LoginStyle>

  );
}
