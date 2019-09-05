import React from 'react';

function ListaDeProdutos({itens, onComprar}) {
  function ItemDaLista(produto) {
    return (
      <li>
        {produto.nome} - R$ {produto.valor.toFixed(2)}
        &nbsp; 
        <button onClick={() => onComprar(produto)}>
          Comprar
        </button>
      </li>
    );
  }
  
  return (
    <>
      <h1>Lista De Produtos</h1>
      <ul>{itens.map(ItemDaLista)}</ul>
    </>
  );
}

export default ListaDeProdutos;
