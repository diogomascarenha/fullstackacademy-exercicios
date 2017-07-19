/*
Exercício 2

Dado o seguinte vetor e utilizando somente map, reduce e filter.

2a) Gere um novo vetor com a lista de produtos cuja a quantidade seja maior que 0

2b) Gere um novo vetor somente com o id do produto e o sub-total (preco x qtd)

2c) Gere o somatório dos sub-totais

const produtos = [
  {
    id: 1,
    preco: 10.0,
    qtd: 2
  },
  {
    id: 2,
    preco: 10.0,
    qtd: 2
  },
  {
    id: 3,
    preco: 10.0,
    qtd: 2
  },
  {
    id: 4,
    preco: 10.0,
    qtd: 0
  }
]
*/
const produtos = [
  {
    id: 1,
    preco: 10.0,
    qtd: 2
  },
  {
    id: 2,
    preco: 10.0,
    qtd: 2
  },
  {
    id: 3,
    preco: 10.0,
    qtd: 2
  },
  {
    id: 4,
    preco: 10.0,
    qtd: 0
  }
];
let produtosMaiorQueZero = produtos.filter(function(item){ return item.qtd > 0});
let produtosSubTotal = produtos.map(function(item){ return {id: item.id, subtotal: (item.qtd * item.preco)}});
let produtosSumSubTotal = produtos.map(function(item){ return (item.qtd * item.preco)}).reduce(function(anterior, atual){return anterior + atual});
console.log(produtosMaiorQueZero);
console.log(produtosSubTotal);
console.log(produtosSumSubTotal);