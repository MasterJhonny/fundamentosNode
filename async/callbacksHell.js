let nam = "Carlos";
function hola(nombre, callback){
    setTimeout(function(){
        console.log(`hola ${nombre}`);
        callback(nombre);
    }, 2000)
}

function adios(nombre, callback){
    setTimeout(function(){
        console.log(`adios ${nombre}`);
        callback(nombre)
    }, 1000)
}

function hablar(nombre, callback){
    setTimeout(function(){
        console.log(`bla bla bla bla.... ${nombre}`);
        callback(nombre)
    }, 1200)
}

function conversar(nombre, veces, callback){
    if(veces > 0){
        hablar(nombre, function(){
            conversar(nombre, --veces, callback)
        })
    } else {
        adios(nombre, callback)
    }
}

console.log("iniciando Prosss..")
conversar(nam, 4, function(){
    console.log("terminando pross...")
})



















// hola(nam, function(){
//     hablar(nam, function(nombre){
//         hablar(nombre, function(nombre){
//             hablar(nombre, function(nombre){
//                 hablar(nombre, function(nombre){
//                     adios(nombre, function(){
//                         console.log("terminando pross...");
//                     })
//                 })
//             });
//         })
//     })
// })