let producto = "Hamburguesa";


function preparar(pro, callback){
    setTimeout(function(){
        console.log(`P1. Preparando ${pro}`)
        callback(pro)
    }, 2000)
}

function cocinando(pro, callback){
    setTimeout(function(){
        console.log(`P2. Concinando ${pro}`)
        callback(pro)
    }, 1000)
}

function aderesos(pro, callback){
    setTimeout(function(){
        console.log(`P3. Colocando Aderesos ${pro}`)
        callback()
    }, 3000)
}

console.log('Iniciando pross...');
preparar(producto, function(pro){
    cocinando(pro, function(pro){
        aderesos(pro, function(){
            console.log("terminando pross...");
        });
    });
});

