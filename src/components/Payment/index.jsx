import { InputLabel } from '../InputLabel/index';
import { Button } from '../Button/style';
import { InputLabelStyle } from '../InputLabel/style';
import { PaymentStyle } from './style';

export function Payment() {
  return (

    <PaymentStyle>
      <div>
        <p> VOLTAR</p>
      </div>
      <form>

        <InputLabelStyle>
          <label htmlFor="input">Nome:</label>
          <input type="text" name="nome" id="nome" />
        </InputLabelStyle>

        <InputLabelStyle>
          <label htmlFor="input">Celular:</label>
          <input type="text" name="nome" id="nome" />
        </InputLabelStyle>

        <div>
          <p>ENTREGA</p>
        </div>

        <div className="radioContainer">
          <input type="radio" name="adress" id="retirar" />
          <label htmlFor="retirar">Retirar</label>
          <input type="radio" name="adress" id="delivery" />
          <label htmlFor="delivery">Delivery</label>
        </div>

        <div>
          <p>PAGAMENTO</p>
          <p>Metodo de Pagamento</p>
        </div>

        <div className="radioContainerPayment">
          <input type="radio" name="payment" id="cartao" />
          <label htmlFor="cartao">Cartão</label>
          <input type="radio" name="payment" id="dinheiro" />
          <label htmlFor="dinheiro">Dinheiro</label>
        </div>

        <Button>Confirmar pedidos</Button>

      </form>

    </PaymentStyle>

  );
}
