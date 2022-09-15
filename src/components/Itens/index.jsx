import { useEffect, useState } from 'react';
import { ItensStyle } from './style';
import { ItemCard } from '../ItemCard';

export function Itens({ itemType, title }) {
  const [itens, setItens] = useState([]);
  const url = 'https://hamburguer-api.herokuapp.com/itens';

  async function getItens() {
    const data = await fetch(url);
    const jsonData = await data.json();
    setItens(jsonData);
  }

  useEffect(() => {
    getItens();
  }, []);

  return (
    <ItensStyle>
      <div className="itensContainer">
        <p className="title">{title}</p>
        <div className="itens">
          {
            itens.map((current) => (
              current.tipo === itemType
                ? (
                  <ItemCard
                    image={current.url_img}
                    title={current.nome}
                    description={current.descricao}
                    price={current.valor % 1 === 0 ? `${current.valor}.00` : `${current.valor}0`}
                    bg="#F8F7FF"
                  />
                )
                : <></>
            ))
          }
        </div>
      </div>
    </ItensStyle>
  );
}
