let nombre = "Carlos Riveros";
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
            resolve(nombre)
        }, 1000)
    })
}

function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log(`bla bla bla bla.... ${nombre.substring(0, 6)}`);
            resolve(nombre);
        }, 1200)
        reject("Ups sucedio un error")
    })
}
console.log("Start...");
hola(nombre)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then(()=>{
        console.log("End...");
    })
    .catch((error) => console.log("Error: " + error))

