/**
Exercício 4

Construa uma função async que utiliza a função readdirPromise com await 
e escreva no console a lista de arquivos/diretórios retornados.

 */
var fs = require('fs')
var Promise = require('promise')

const path = './'
function readdirPromise(path){
    return new Promise(function(fulfill, reject){
        fs.readdir(path, (err, files) => {
            if(err){
                reject(err)
            }else{
                fulfill(files)
            }
        })
    })
}

async function asyncReaddirPromise(){
    let files = await readdirPromise(path)
    console.log(files)
}

asyncReaddirPromise()