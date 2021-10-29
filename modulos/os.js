const os = require('os');

// arquitertura
//console.log(os.arch())

// type of system operative
//console.log(os.platform())

// saber las cpus que have
// console.log(os.cpus().length)

// rectrincciones and errores
//console.log(os.constants)

// memoria de
const SIZE = 1024;

function kb(bytes) { return bytes/SIZE }
function mb(bytes) { return kb(bytes)/SIZE }
function gb(bytes) { return mb(bytes)/SIZE }

console.log(os.freemem())
console.log(kb(os.freemem()))
console.log(mb(os.freemem()))
console.log(gb(os.totalmem()))
setInterval(function() {
    console.log(gb(os.freemem()))
}, 1000)

// directorio rais
console.log(os.homedir())

// directorio temporal
console.log(os.tmpdir())

// name de machine de
console.log(os.hostname())

// interafces de red
console.log(os.networkInterfaces())