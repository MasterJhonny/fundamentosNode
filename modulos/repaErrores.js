const fs = require('fs');


function anoterFunction(){
    serRompe()
}

function bucle() {
    let cont = 1;
    setInterval(() => {
        console.log(cont++);
    }, 900)
}


function serRompeAsinc() {
    setTimeout(() => {
        try {
            return w + 3;
        } catch (error) {   
            console.log("oh, no Algo se rompio:", error.message); 
        }
    }, 4000)
}

function leer(ruta) {
    fs.readFile(ruta, (err, data) => {
        if(err){
            console.log("error de lecture: ", err);
        }
        try {
            let valores = data.toString().split("\n").filter(item => item.search("https") > -1);
            valores.forEach(item => {
                console.log(item)
            })
        } catch (error) {
            console.log("Error de lecture capturado: ", err)
        }
    })
}

function serRompe() {
    return 3 + t;
}


bucle()

try {
    anoterFunction();
} catch (err) {
    console.error("Ups, Error de tipo: ", err.message);
}
try {
    serRompeAsinc()
} catch (error) {   
    console.error("Ups, se rompio Asinc: ", err.message)
}

setTimeout(() => {
    leer(__dirname + "/chat5.txt")
}, 6000)

console.log("despues...")