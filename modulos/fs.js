const fs = require('fs');

let demo;
function leer(ruta, callback) {
    fs.readFile(ruta, (err, data) => {
        if(err) throw err;
        callback(data.toString())
    })
}

function write(ruta, data, callback) {
    fs.writeFile(ruta, data, (err) => {
        if(err) throw err;
        callback("ok write:", data)
    })
}

function borrar(ruta, callback) {
    fs.unlink(ruta, (err) => {
        if(err) throw err;
        console.log("se borro:", ruta)
    })
}

//write(__dirname + "/file2.txt", "Este es un new file jajaja.", console.log);

// leer(__dirname + "/file2.txt", console.log);
leer(__dirname + "/chat.txt", console.log)

// borrar(__dirname + "/file.txt", console.log)