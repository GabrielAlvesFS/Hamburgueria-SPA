import { useEffect, useState } from 'react';
import { ItensStyle } from './style';
import { ItemCard } from '../ItemCard';
import { listarItens } from '../../services/itensApi';

export function Itens({ itemType, title }) {
  const [itens, setItens] = useState([]);

  async function getItens() {
    const res = await listarItens();
    setItens(res);
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
            itens.map((current) => {
              if (current.tipo === itemType) {
                return (
                  <ItemCard
                    key={current.id}
                    image={current.url_img}
                    title={current.nome}
                    description={current.descricao}
                    price={current.valor % 1 === 0 ? `${current.valor}.00` : `${current.valor}0`}
                    bg="#F8F7FF"
                    product={{ ...current, qtd: 0 }}
                  />
                );
              }
              return false;
            })
          }
        </div>
      </div>
    </ItensStyle>
  );
}
