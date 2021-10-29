const figlet = require('figlet');


function defColor(color){
    switch(color){
        case "red":
            return "\x1b[31m";
        case "green":
            return "\x1b[32m";
        case "yellow":
            return "\x1b[33m";
        case "blue":
            return "\x1b[34m";
        default: 
            return "\x1b[37m";
    }
}


function write(data, color){
    let c = defColor(color);
    figlet(data, (err, data) => {
        if(err){
            console.error("%cUps Sucedio un error: ", "color: red");
            console.error(err);
            return;
        }
        console.log(c, data)
    })
}
// write("Hola", "")
// write("Como eatan ?", "yellow")
// write("Yo estoy Bien", "")
// write("y ustedes ?", "yellow")
//write("y ustedes ?", "yellow")
//write("y ustedes ?", "yellow")
//write("DIOS ES AMOR", "red")
// write("y ustedes ?", "yellow")
// write("y ustedes ?", "yellow")
// write("y ustedes ?", "yellow")
// write("y ustedes ?", "yellow")

module.exports = write;