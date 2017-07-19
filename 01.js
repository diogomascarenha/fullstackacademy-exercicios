/*
Exercício 1

Dado o seguinte vetor e utilizando somente map e reduce, somar todos os valores de produtos e utilize o console.log para ver o valor na tela.

const produtos = [
  {
    nome: 'Bicicleta',
    preco: 1200.0
  },
  {
    nome: 'Capacete',
    preco: 450.0
  }
]
*/

const produtos = [
  {
    nome: 'Bicicleta',
    preco: 1200.0
  },
  {
    nome: 'Capacete',
    preco: 450.0
  }
]

const soma = produtos.map(function(item){return item.preco}).reduce(function(anterior, atual){return anterior + atual});
console.log(soma);