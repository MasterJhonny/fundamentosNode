const fs = require('fs');
let valor = 1;
let text = "Carlos";
function contador () {
    setInterval(() => {
        text = `Hola ...${valor++}`;
        console.log(text);
    }, 1000)
}

function readFile (ruta, callback) {
    fs.readFile(ruta,(err, data)=>{
        if(err){
            console.log("error:", err)
        }
        callback("Se ha leido:", data.toString())
    })
}

function writeFile (ruta, data, callback) {
    fs.writeFile(ruta, data, (err) =>{
        if(err) throw err;
        callback("Se ha escrito: ", data)
    })
}

function borrar (ruta, callback){
    fs.unlink(ruta, (err) =>{
        if (err) {
            console.error(err)
        }
        console.log("se borro:", ruta)
    })
}


setInterval(() => {
    writeFile(__dirname + "/file4.txt", text, console.log)
}, 1000);

setTimeout(() => {
    setInterval(() => {
        try {
            readFile(__dirname + "/file4.txt", console.log)
        } catch (error) {
            console.log(error)
        }
    }, 1000);
}, 4000);

function deleteFile(){
    setTimeout(() => {
        try {
            borrar(__dirname + "/file4.txt", console.log)
        } catch (error) {
            console.log(error);
        }
    }, 4000)
}

contador();
// deleteFile()

fs.stat(__dirname + "/systemFile.js", (err, stat) => {
    if(err) throw err;
    console.log(stat.mode)
})
