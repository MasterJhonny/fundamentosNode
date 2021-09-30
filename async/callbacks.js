
function soyAsync (name, myCallback) {
    setTimeout(function () {
        console.log(`Hola... ${name}, estoy siendo Async`);
        myCallback(name);
    }, 2000)
}

function otroAsync (name, otroCallback) {
    setTimeout(function () {
        console.log(`Adios... ${name}`)
        otroCallback()
    }, 1000)
}
console.log("inicuando process...")
soyAsync('Pepe Ramirez', function(nombre){
    otroAsync(nombre, function(){
        console.log("terminado process...")
    })
})
// soyAsync("calors", function(){})
// otroAsync("calors", function(){})
// console.log("pross...")
// console.log("prossensando...")
