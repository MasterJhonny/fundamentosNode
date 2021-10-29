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

function otraforma3(){
    setTimeout(() => {
        console.log("kkkk esa otra funtion ");
    }, 5000)
}

function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log(`bla bla bla bla....`);
            resolve(nombre);
            reject("Ups ha ocurrido un error!")
        }, 1200)
    })
}

console.log("init...")
hola(nombre)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then(() => {
        console.log("end...");
    })
    .catch(error => {
        console.error("ERROR:", error);
    })


console.log("Hola")
console.log("Ahora tenemos dos Pantallas")
function otraforma(){
    setTimeout(() => {
        console.log("kkkk de otra")
    }, 2000);
}
otraforma3();
otraforma();

