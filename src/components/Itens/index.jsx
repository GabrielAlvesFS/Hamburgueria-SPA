/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { Search } from 'react-feather';
import { ItensStyle } from './style';
import { ItemCard } from '../ItemCard';
import { listarItens } from '../../services/itensApi';
import { SearchBar } from '../SearchBar/style';

export function Itens({ itemType, title }) {
  const [itens, setItens] = useState([]);
  const [itemFilter, setItemFilter] = useState([]);

  async function getItens() {
    const res = await listarItens();
    setItens(res);
  }

  useEffect(() => {
    getItens();
  }, []);

  const filterItems = (event) => {
    const searchInput = event.target.value;
    const filteredItems = itens.filter((item) => item.nome.toLowerCase().includes(searchInput.toLowerCase()));
    setItemFilter(filteredItems);
  };

  return (
    <ItensStyle>
      <div className="itensContainer">
        <div className="titleContainer">
          <p className="title">{title}</p>
          <div className="search">
            <Search className="searchIcon" />
            <SearchBar type="text" id="SearchBar" name="SearchBar" placeholder="Pesquise aqui" onChange={filterItems} />
          </div>
        </div>
        <div className="itens">
          {
            itemFilter.length > 0
              ? itemFilter.map((current) => {
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
              : itens.map((current) => {
                
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
                

              })
          }
        </div>
      </div>
    </ItensStyle>
  );
}
