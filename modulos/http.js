const http = require("http");

http.createServer(router).listen(8080)


function router (req, res){
    console.log("Nueva peticion!")
    console.log(req.url)

    switch(req.url){
        case "/home":
            let salida = respuesta()
            res.write(salida)
            res.end()
            break;
        case "/":
            res.write("Esta es tha page main")
            res.end()
            break;
        case "/cursos":
            res.write("Estos son los cursos")
            res.end()
            break;
        default:
            res.write("Error: 404, no se los que quieres!")
            res.end()
        break;
    }
    //headers
    res.writeHead(201, { "content-Type": "text/plain" })

    // repuesta al cliente
    // res.write("Hola esta is ny server whit  http!")
    // res.end()
}

function respuesta() {
    return "Este es el home";
}

console.log("server run port: 8080")