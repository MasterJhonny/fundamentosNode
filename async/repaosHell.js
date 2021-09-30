require("dotenv").config();

let nombre = process.env.DB_NAME || 'Juan';


function hola(nombre, callback) {
    setTimeout(function(){
        console.log(`Hola ${nombre}`);
        callback(nombre);
    }, 2000)
}

function adios(nombre, callback) {
    setTimeout(function(){
        console.log(`Adios ${nombre}`);
        callback();
    }, 1000)
}

function hablar(nombre, callback) {
    setTimeout(function(){
        console.log(`bla bla bla .... `);
        callback(nombre);
    }, 500)
}

function conversar(nombre, veces, callback) {
    if(veces > 0) {
        hablar(nombre, function(){
            conversar(nombre, --veces, callback)
        })
    } else {
        callback(nombre);
    }
}



console.log("start...");
hola(nombre, function(nombre){
    conversar(nombre, 5, function(nombre){
        adios(nombre, function(){
            console.log("end...");
        })
    });
})




































// console.log("start...");
// hola(nombre, function(nombre){
//     hablar(nombre, function(nombre){
//         hablar(nombre, function(nombre){
//             hablar(nombre, function(nombre){
//                 hablar(nombre, function(nombre){
//                     hablar(nombre, function(nombre){
//                         hablar(nombre, function(nombre){
//                             hablar(nombre, function(nombre){
//                                 hablar(nombre, function(nombre){
//                                     hablar(nombre, function(nombre){
//                                         hablar(nombre, function(nombre){
//                                             hablar(nombre, function(nombre){
//                                                 adios(nombre,function(){
//                                                     console.log('end...')
//                                                 });
//                                             })
//                                         })
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     });
// });