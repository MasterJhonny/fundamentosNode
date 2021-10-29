const open = require('opn')
const fs = require('fs');


function leer(ruta, callback) {
    fs.readFile(ruta, (err, data) => {
        if(err){
            console.log("error:", err);
        }
        try {
            console.log(data.toString())
        } catch (error) {
            console.error("ups:", error);
        }
    })
}

function otraFunction(){
    let valor = 1;
    setInterval(function(){
        console.log(valor++)
        fs.writeFile(__dirname + "/file4.txt", valor.toString(), (err)=> {
            try {
                if(err) throw err;
                console.log("se escribio: ", valor)
            } catch (error) {   
                console.log("oh, sucedio algo mal: ", error.message)
            }
        })
    }, 1000)
}


function seRompe(){
    return 3 + a;
}

function seRompeAsync() {
    setTimeout(()=> {
        try {
            return 3 + a;
        } catch (error) {  
            console.error("Ups, errors: ", error.message);
        }
    }, 4000)
}

function deleteFile(ruta, callback){
    fs.unlink(ruta, (err)=> {
        if(err){
            console.error("Ups, otro errors: ", err.message);
        }
    })
}


function leerChat(ruta, callback){
    fs.readFile(ruta, (err, data)=> {
        if(err) throw err;
        let text = data.toString().split("\n")
        let valores = text.filter((item)=> {
            return item.search("https:") > -1
        })
        // valores.forEach(item => {
        //     console.log(item);
        // })
        let linkConFecha  = valores[valores.length - 1]
        let linkNum = linkConFecha.search("http")
        let link = linkConFecha.substring(linkNum, linkConFecha.length)
        console.log(link);
        open(link)
    })
}
otraFunction();


try {
    seRompeAsync()
} catch (error) {
    console.error("Ups Error: ", error)
}

try {
    leer(__dirname + "/file.txt")
} catch (error){
    console.error("Error: ", error)
}

setTimeout(() => {
    console.log("otras cosas")
}, 6000)



setTimeout(()=> {
    leerChat(__dirname + "/chat.txt");
}, 2000)


// setTimeout(()=> {
//     leerChat(__dirname + "/chat.txt");
// }, 5000)