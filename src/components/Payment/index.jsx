import { InputLabel } from '../InputLabel/index';
import { Button } from '../Button/style';
import { InputLabelStyle } from '../InputLabel/style';
import { PaymentStyle } from './style';

export function Payment() {
  return (

    <PaymentStyle>
      <>
        <p className="returnPage"> ← VOLTAR</p>
      </>

      <section className="secContainer">
        <form className="formContainer">

          <>
            <p className="data"> Seus dados</p>
          </>

          <InputLabelStyle>
            <label htmlFor="input">Nome:</label>
            <input type="text" name="nome" id="nome" />

          </InputLabelStyle>

          <InputLabelStyle>
            <label htmlFor="input">Celular:</label>
            <input type="text" name="nome" id="nome" />
          </InputLabelStyle>

          <>
            <p className="data">Entrega</p>
          </>

          <section className="radioContainerAdress">
            <div>
              <input type="radio" name="adress" id="red" />
              <label htmlFor="retirar">Retirar na loja</label>
            </div>
            <div>
              <input type="radio" name="adress" id="red" />
              <label htmlFor="delivery">Delivery</label>
            </div>

          </section>

          <>
            <p className="data">Pagamento</p>
            <p className="paymentMethod">Metodo de Pagamento:</p>
          </>

          <section className="radioContainerPayment">

            <div>
              <input className="inputRadio" type="radio" name="payment" id="red" />
              <label htmlFor="cartao">Cartão</label>
            </div>
            <div>
              <input type="radio" name="payment" id="red" />
              <label htmlFor="dinheiro">Dinheiro</label>
            </div>

          </section>

          <Button>Confirmar pedido</Button>

        </form>

      </section>

    </PaymentStyle>

  );
}
