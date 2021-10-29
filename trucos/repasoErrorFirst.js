function asincrona (callback) {
    setTimeout(() => {
        try {
            let valor = 4 + W;
            callback(null, valor);
        } catch (error) {
            callback(error);
        }
    }, 1000)
}


asincrona((err, valor) => {
    if(err) {
        // throw err;
        console.log(err);
        return;
    }
    console.log(valor);
})

setTimeout(() => {
    console.log("End....")
}, 1000)