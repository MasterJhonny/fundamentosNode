const { exec, spawn } = require("child_process");
const opn = require("opn")

// exec("cat modulos/chat.txt", (err, stdout, stderr) => {
//     if(err){
//         console.error("Error: ", err)
//     }
//     let salida = stdout
//     let cadena = salida.split("\n").filter(item => item.search("https://meet") > -1)
//     console.table(cadena)
//     let texto = cadena[cadena.length - 1]
//     let num = texto.search("http");
//     let link = texto.substr(num, texto.length)
//     console.log(link)
// })

// exec("ls -la", (err, stdout, stderr) => {
//     if(err){
//         console.log("Error: ", err)
//     }
//     let salida = stdout.split("\n");
//     salida.forEach(item => console.log(item.search(".json")> -1));
// })

// exec("node modulos/errores.js", (err, stdout, stderr) => {
//     if(err){
//         console.error("Error: ", err)
//     }
//     console.log(stdout)
// })

// console.log("Hola modulos")


let proceso = spawn("ls", ["-la"])

console.log(proceso.pid)
console.log(proceso.connected)


proceso.on("close", function(){
    console.log("Se serrado el proceso")
    opn("https://www.youtube.com/watch?v=tF8R3J5yxXc")
})


proceso.stdout.on("data", function(dato) {
    console.log(dato.toString())
})