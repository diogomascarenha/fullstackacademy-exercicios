/*
Exercício 5 - extra

Dado a lista de arquivos/diretórios retornada no exercício anterior, 
mostre quais são arquivos. 
(utilize fs.stat(caminho, (err, stat) => stat.isFile()) para isso.)

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

function fstatPromise(path){
    return new Promise(function(fulfill, reject){
        fs.stat(path, (err, stat) => {
            if(err){
                reject(err)
            }else{
                fulfill(stat.isFile())
            }
        })
    })
}

async function asyncFsStat(path)
{
    let isFile = await fstatPromise(path)
    //console.log('variavel path')
    //console.log(path)
    //console.log('variavel isFile')
    //console.log(isFile)
    return isFile
}
async function asyncReaddirPromise(){
    let paths = await readdirPromise(path)
    console.log('variavel paths')
    console.log(paths)
    
    // Não entendi porque com Filter não funcionou
    let files = paths.filter(asyncFsStat)
    console.log('variavel files')
    console.log(files)

    filesFor = []
    for(let i=0; i < paths.length; i++)
    {
        ifFile = await asyncFsStat(files[i])
        console.log(files[i])
        console.log(ifFile)
        if(ifFile)
        {
            console.log('É arquivo')
            filesFor.push(files[i])
        }
        else
        {
            console.log('Não é arquivo')
        }
        
    } 
    console.log('variavel filesFor')
    console.log(filesFor)
}

asyncReaddirPromise()

