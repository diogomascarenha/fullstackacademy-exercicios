/*
Exercício 6

Utilizando o ExpressJS, crie uma rota que some 2 números enviados como parâmetros na URL.
Exemplo, ao executar no navegador: 
http://localhost:3000/somar?num1=10&num2=30 
deverá ser retornado na tela A soma é: 40.
*/

const express = require('express')
const app = express()

const port = 3000

app.get('/somar', function (request, response){
    let num1 = request.query.num1
    let num2 = request.query.num2
    if(!num1 || !num2){
        return response.status(400).send('O num1 e num2 precisam ser informados')
    }
    let soma = parseFloat(request.query.num1) + parseFloat(request.query.num2);
    response.send('A soma é: ' + soma)
})

app.listen(port, () => console.log('Server running on ' + port))