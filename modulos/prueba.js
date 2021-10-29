const os = require("os");

const SIZE = 1024;

const kb = (bytes) => bytes/SIZE
const mb = (bytes) => kb(bytes)/SIZE
const gb = (bytes) => mb(bytes)/SIZE


console.log(os.freemem())
console.log(kb(os.freemem()))
console.log(mb(os.freemem()))
console.log(gb(os.freemem()))

setInterval(() => {
    console.log(gb(os.freemem()))
}, 500)
