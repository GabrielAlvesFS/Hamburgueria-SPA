import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/cart';
import { InputLabel } from '../InputLabel/index';
import { Button } from '../Button/style';
import { PaymentStyle } from './style';
import { CartContext } from '../../context/cart';

export function Payment() {
  const {
    productsCart,
    confirmOrder,
  } = useContext(CartContext);

  const [form, setForm] = useState(true);
  const [inputValue, setInputValue] = useState({
    nome: '',
    celular: '',
    cep: '',
    estado: '',
    cidade: '',
    bairro: '',
    rua: '',
    numero: '',
  });

  const postPedido = (e) => {
    e.preventDefault();
    confirmOrder()
  };

  return (

    <PaymentStyle>

      <Link to="/Burguers">
        <p className="returnPage"> ← VOLTAR</p>
      </Link>

      <form className="secContainer" onSubmit={(e) => { postPedido(e); }}>

        <p className="title"> Seus dados</p>

        <section className="infoSec">
          <InputLabel
            onChange={(event) => { setInputValue({ ...inputValue, nome: event.target.value }); }}
            value={inputValue.nome}
            labelName="Nome:"
            placeholderName="Nome completo"
            inputWidth={400}
            inputHeight={40}
            required="true"
          >
            Nome:
          </InputLabel>
          <InputLabel
            onChange={(event) => { setInputValue({ ...inputValue, celular: event.target.value }); }}
            value={inputValue.celular}
            labelName="Celular:"
            placeholderName="(00) 00000-0000"
            inputWidth={400}
            inputHeight={40}
            required="true"
          />
        </section>

        <section className="adressInfo">
          <InputLabel
            onChange={(event) => { setInputValue({ ...inputValue, cep: event.target.value }); }}
            value={inputValue.cep}
            labelName="CEP:"
            placeholderName="00000-000"
            inputWidth={200}
            inputHeight={40}
            required="true"
          >
            CEP
          </InputLabel>

          <InputLabel
            onChange={(event) => { setInputValue({ ...inputValue, estado: event.target.value }); }}
            value={inputValue?.estado}
            labelName="Estado:"
            placeholderName="Estado"
            inputWidth={200}
            inputHeight={40}
            required="true"
          >
            Estado
          </InputLabel>

          <InputLabel
            onChange={(event) => { setInputValue({ ...inputValue, cidade: event.target.value }); }}
            value={inputValue?.cidade}
            labelName="Cidade:"
            placeholderName="Cidade"
            inputWidth={200}
            inputHeight={40}
            required="true"
          >
            Cidade
          </InputLabel>

          <InputLabel
            onChange={(event) => { setInputValue({ ...inputValue, bairro: event.target.value }); }}
            value={inputValue?.bairro}
            labelName="Bairro:"
            placeholderName="Bairro"
            inputWidth={200}
            inputHeight={40}
            required="true"
          >
            Bairro
          </InputLabel>

          <InputLabel
            onChange={(event) => { setInputValue({ ...inputValue, rua: event.target.value }); }}
            value={inputValue?.rua}
            labelName="Rua:"
            placeholderName="Rua"
            inputWidth={200}
            inputHeight={40}
            required="true"
          >
            Rua
          </InputLabel>

          <InputLabel
            onChange={(event) => { setInputValue({ ...inputValue, numero: event.target.value }); }}
            value={inputValue?.numero}
            labelName="Numero:"
            placeholderName="Numero"
            inputWidth={100}
            inputHeight={40}
            required="true"
          >
            Numero
          </InputLabel>
        </section>

        <p className="title">Pagamento</p>
        <p className="paymentMethod">Metodo de Pagamento:</p>

        <section className="radioContainerPayment">
          <div>
            <input checked={inputValue?.radio} className="inputRadio" type="radio" name="payment" id="card" required />
            <label htmlFor="card">Cartão</label>
          </div>
          <div>
            <input checked={inputValue?.radio} type="radio" name="payment" id="money" required />
            <label htmlFor="money">Dinheiro</label>
          </div>
          <div>
            <input checked={inputValue?.radio} type="radio" name="payment" id="pix" required />
            <label htmlFor="Pix">Pix</label>
          </div>
        </section>

        <section className="secBtn">

          <Button className="paymentBtn">Confirmar pedido</Button>

          <Button className="paymentBtn" type="submit">Confirmar pedido</Button>

        </section>

      </form>

    </PaymentStyle>

  );
}
