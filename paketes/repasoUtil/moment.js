const moment = require('moment');



// setInterval(() => {
//     let ahora = moment()
//     console.log(ahora.format("HH:mm:ss"));
// }, 1000);


let fecha1 = moment('2021-10-16');
let fecha2 = moment('2021-10-22');

console.log(fecha2.diff(fecha1, 'days'))
console.log(fecha2.add(20, 'days').format("YYYY-MM-DD"))

var final = moment("2021-10-18");
setInterval(() => {
    let inicio = moment();
    // console.log(inicio.format("YYYY-MM-DD"))
    let duracion = final.diff(inicio);
    let intervalo = moment(duracion);
    let mes = intervalo.month()+1;
    let diaDelMes = intervalo.date();
    let dia = intervalo.day();
    let hora = intervalo.hour();
    let minuto = intervalo.minute();
    let segundo = intervalo.second();
    let resultado = (intervalo.format("MM DD HH:mm:ss"));
    console.log(`${dia} - ${hora}:${minuto}:${segundo}`)
}, 1000)