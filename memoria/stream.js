const stream = require('stream');
const util = require('util');
const fs = require('fs');

//let data = "";

let readDataStream = fs.createReadStream(__dirname + "/chat.txt");
readDataStream.setEncoding('utf8');
const Transform = stream.Transform;

function Mayus () {
    Transform.call(this);
}

util.inherits(Mayus, Transform); 

Mayus.prototype._transform = function (chunk, codif, callback) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus)
    callback()
}

let mayus = new Mayus();

readDataStream
    .pipe(mayus)
    .pipe(process.stdout)






































// const fs = require('fs');


//let data = "";

// let readDataStream = fs.createReadStream(__dirname + "/chat.txt");
// readDataStream.setEncoding('utf-8')
// readDataStream.on('data', (chunk) => {
//     data += chunk
// })


// readDataStream.on('end', () => {
//     console.log(data);
// })


// process.stdout.write('Hola')
// process.stdout.write(' Mundo ')
// process.stdout.write('Feliz \n')


