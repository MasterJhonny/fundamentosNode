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

function hablar(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log(`bla bla bla bla....`);
            resolve();
        }, 1200)
        // reject("Ups sucedio un error")
    })
}
async function main(nombre){
    let name = await hola(nombre);
    await hablar()
    await hablar()
    await hablar()
    await hablar()
    await hablar()
    await hablar()
    await hablar()
    await hablar()
    await adios(name)
    console.log("End...")
}
console.log("init...")
main(nombre)