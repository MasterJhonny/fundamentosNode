require('dotenv').config();

let nombre = process.env.DB_NAME || "Pepe";

function hola(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log(`hola ${nombre}`);
            resolve(nombre);
        }, 2000)
    })
}

function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log(`adios ${nombre}`);
            resolve();
        }, 1000)
    })
}


function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log(`bla bla bla bla....`);
            resolve(nombre);
        }, 1200)
    })
}

async function main(name){
    await hola(name)
    await hablar(name)
    await hablar(name)
    await hablar(name)
    await hablar(name)
    await hablar(name)
    await hablar(name)
    await hablar(name)
    await adios(name)
    console.log("End ...")
}
console.log("Srtar...")
main(nombre);