// let nombre = process.env.NOMBRE || "Sin Nombre";
// let web = process.env.WEB || "Sin Web";

// otra forma de realisarlo con dotenv, un package que nos ayuda a traer las variables de entorno de un archivo .env
require("dotenv").config();

let nombre = process.env.DB_NAME;
let web = process.env.DB_WEB;
let cadena = process.env.DB_CADENA;
let color = process.env.DB_COLOR || "default";
console.log(`hi, my name is ${nombre}`);
console.log(`my website is ${web}`);
console.log(`el color es ${color}`);
let arr = cadena.split(',');
let arr2 = arr.map(item => parseInt(item))
console.log(arr2)
console.log("salida...")
console.log("otra salida")