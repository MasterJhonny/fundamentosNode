function asincrona (callback) {
    setTimeout(() => {
        try {
            let valor = 1 + w;
            callback(null, valor);
        } catch (error) {   
            callback(error);
        }
    }, 1000)
}

try {
    asincrona((err, val) => {
        // if(err) throw err;
    
       if (err){
           console.log('Ups, error')
           console.error(err)
           return false;
       }
        console.log(val)
    })
} catch (error) {
    console.error(error)
}

setTimeout(() => {
    console.log("end");
}, 2000)