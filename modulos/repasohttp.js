const http = require('http');

http.createServer(function (req, res){
    res.write("Hola mundo!");
    res.end();
}).listen(3000)

// function router(req, res) {
//     console.log("new req")
//     console.log(req.url)
//     // res.writeHead(201, { "Content_Type": "text/html" })
//     switch (req.url) {
//         case '/':
//             res.write("<h1>Esta es la pagina princial</h1><p>this si the parafo this en las siutuacion.</p>");
//             res.end();
//         break;
//         case '/home':
//             res.write("<h1>This is Home</h1><p>this si the parafo del home</p>");
//             res.end();
//         break;
//         case '/cursos':
//             res.write("<h1>This son los Curoso</h1><p>Curso de asdgf...</p>");
//             res.end();
//         break;
//         default:
//             res.write("Error: 404")
//             res.end();
//         break;
//     }
// }

console.log("run sever: 3000")