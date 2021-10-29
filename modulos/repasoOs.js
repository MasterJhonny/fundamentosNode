const os = require('os');

// arquitertura
// console.log(os.arch());

// type of system operative
// console.log(os.platform());

// cpus
// console.log(os.cpus());

// cpus numProcess
// console.log(os.cpus().length);

// restriction 
// console.log(os.constants);


// memoria
const SIZE = 1024;
const kb = (bytes) => bytes/SIZE
const mb = (bytes) => kb(bytes)/SIZE
const gb = (bytes) => mb(bytes)/SIZE

console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));
console.log(gb(os.totalmem()))
setInterval(() => {
    console.log(gb(os.freemem()));
}, 500)

// directorio raiz
// console.log(os.homedir())

// director temporal
// console.log(os.tmpdir())

// name desktop
// console.log(os.hostname())

// interface of red
console.log(os.networkInterfaces())



