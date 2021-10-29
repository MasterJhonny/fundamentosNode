const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = "";

let readableStream = fs.createReadStream(__dirname + '/chat.txt')
readableStream.setEncoding('utf8')

// readableStream.on('data', (chunk) => {
//     data += chunk
// })

// readableStream.on('end', () => {
//     let i = 0;
//     let cadena = data.split('\n')
//     let valor = setInterval(() => {
//         if(i === cadena.length -1) {
//             clearInterval(valor)
//         }
//         console.log(cadena[i])
//         i++
//     }, 500)
// })

// function salida(data) {
//     process.stdout.write(data + '\n');
// }

// salida('Hola mundo');

const Transform = stream.Transform;

function Mayus () {
    Transform.call(this)
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, codif, callback) {
    chunkMayus = chunk.toString().toUpperCase()
    this.push(chunkMayus)
    callback()
}


let mayus = new Mayus()

readableStream
    .pipe(mayus)
    .pipe(process.stdout)


// let i = 5;
// let vol = setInterval(() => {
//     if(i === -1) {
//         clearInterval(vol)
//         movie.pause();
//     }
//     movie.volume = i/10
//     i--
// }, 200)