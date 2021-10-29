// const process = require('process');
const fs = require('fs');

let i = 1;
process.on('exit', () => {
    console.log("the process exited")
})

process.on('beforeExit', () => {
    console.log("the process this a punt of Exit")
    setTimeout(() => {
        console.log("%cno se vera!", "color: red")
    }, 0)
})


setTimeout(() => {
    console.log('\x1b[31m', 'si se cera')
}, 0)

setInterval(() => {
    console.log(i++)
}, 500)
process.on('uncaughtException', (error, origin) => {
    console.log("nos hemos olvidaddo de capturar un error!!!")
    console.error("\x1b[31m", error.message)
    fs.writeFile(__dirname + '/error.txt', "Error no capturado:\n" + error.toString() + "\nEl origen es: " + origin.toString(), (err) => {
        if(err){
            console.error(err.message)
        }
        console.log(error, origin)
    })
})


setTimeout(() => {
    functionNull()
}, 3000)

console.log("Hola.....................")
