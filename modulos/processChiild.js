const { exec, spawn } = require('child_process');


// exec("node modulos/errores.js", (err, stdout, stderr) => {
//     if(err){
//         console.error(err);
//         return;
//     }

//     console.log(stdout);
// })


let proceso = spawn("ls", ["-la"])
console.log(proceso.pid)
console.log(proceso.killed)


proceso.stdout.on("data", (data) => {
    console.log(data.toString())
})

proceso.on("exit", () =>{
    console.log("El proceso termino")
})
console.log(proceso.killed);
