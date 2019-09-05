import React from 'react';

function CarrinhoDeCompras({itens}) {
  function ItemDoCarrinho(produto) {
    return (
      <li>
        {produto.nome} - R$ {produto.valor.toFixed(2)}
      </li>
    );
  }
  function calculaTotal() {
    var total = 0;
    itens.forEach((produto) => total += produto.valor);
    return (<h3>Total R$ {total.toFixed(2)}</h3>)
  }
  return (
    <>
      <h1>Carrinho de Compras</h1>
      <ul>{itens.map(ItemDoCarrinho)}</ul>
      {calculaTotal()}
    </>
  );
}

export default CarrinhoDeCompras;
