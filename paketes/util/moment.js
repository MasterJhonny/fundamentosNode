const moment = require('moment');

let alarma = "21:37:23";

setInterval(() => {
    let ahora = moment();
    let hora = ahora.format("HH:mm:ss")
    console.log(hora);
    if(alarma === hora) {
        console.log("Ya esa Hora!!", hora);
    }
}, 1000);