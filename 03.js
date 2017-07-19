/*
Exercício 3

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

readdirPromise(path).then(function(files){
    console.log(files)
}).catch(function(err){
    console.log(err)
})