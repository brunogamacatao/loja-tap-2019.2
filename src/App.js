import React, {useState} from 'react';
import CarrinhoDeCompras 
  from './componentes/CarrinhoDeCompras';
import ListaDeProdutos 
  from './componentes/ListaDeProdutos';

function App() {
  const [produtos, setProdutos] = useState([
    {id: 1, nome: 'Cadeira', valor: 150.0},
    {id: 2, nome: 'Mouse', valor: 30.0},
    {id: 3, nome: '2 Big Mac', valor: 14.90}
  ]);
  const [carrinho, setCarrinho] = useState([]);
  
  function onComprar(produto) {
    setCarrinho([...carrinho, produto]);
  }
  
  return (
    <>
      <CarrinhoDeCompras itens={carrinho}/>
      <ListaDeProdutos itens={produtos} onComprar={onComprar}/>
    </>
  );
}

export default App;
