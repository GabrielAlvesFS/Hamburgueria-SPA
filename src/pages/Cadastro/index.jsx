import { CadastroStyle, StyledLink } from './style';
import { InputLabel } from '../../components/InputLabel';
import { Button } from '../../components/Button/style';

export function Cadastro() {
  return (
    <CadastroStyle>
      <div className="container">
        <div className="imageContainer">
          <img src="./src/assets/BurguerCad.png" alt="Hambúrguer sendo capturado por soldadinhos" />
        </div>

        <div className="cadastroContainer">
          <form action="" className="formContainer">
            <div className="titleContainer">
              <div className="line" />
              <h1 className="title">Crie sua conta</h1>
            </div>

            <InputLabel labelName="Nome Completo" placeholderName="João da silva" inputWidth={400} inputHeight={50} required="true" gap={4} />
            <InputLabel labelName="E-mail" placeholderName="Joãodasilva@gmail.com" inputWidth={400} inputHeight={50} required="true" gap={4} />
            <InputLabel labelName="Senha" placeholderName="Digite sua senha" inputWidth={400} inputHeight={50} required="true" gap={4} />
            <InputLabel labelName="Confirme sua Senha" placeholderName="Confirme sua senha" inputWidth={400} inputHeight={50} required="true" gap={4} />
            <StyledLink to="/Burguers">
              <Button className="signupBtn" width={200} height={45} bgCor="#ff4040">Cadastrar</Button>
            </StyledLink>
            <div className="loginContainer">
              <span>Já tem uma conta?</span>
              <StyledLink to="/Login">
                <Button className="loginBtn" width={150} height={45} bgCor="transparent" cor="#000">Faça login!</Button>
              </StyledLink>
            </div>
          </form>
        </div>
      </div>
    </CadastroStyle>
  );
}
