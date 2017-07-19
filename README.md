# fullstackacademy-exercicios
##Exercício 1

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

##Exercício 2

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


##Exercício 3

Dado que a assinatura da função readdir do módulo fs é:

const fs = require('fs')
const path = './'
fs.readdir(path, (err, files) => {
  if(err){
    console.log('ocorreu um erro.')
  }else{
    console.log(files)
  }
})
Construa uma versão desta função promisified, ou seja, que retorne uma promise. (Será possível chamá-la da seguinte forma: readdirPromise(path).then((files)=> console.log(files)) )

##Exercício 4

Construa uma função async que utiliza a função readdirPromise com await e escreva no console a lista de arquivos/diretórios retornados.

##Exercício 5 - extra

Dado a lista de arquivos/diretórios retornada no exercício anterior, mostre quais são arquivos. (utilize fs.stat(caminho, (err, stat) => stat.isFile()) para isso.)

##Exercício 6

Utilizando o ExpressJS, crie uma rota que some 2 números enviados como parâmetros na URL. Exemplo, ao executar no navegador: http://localhost:3000/somar?num1=10&num2=30 deverá ser retornado na tela A soma é: 40.