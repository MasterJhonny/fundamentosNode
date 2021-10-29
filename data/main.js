const fs = require('fs');

let dataClients;

fs.readFile(__dirname + '/proveedores1.txt', (err, data) => {
    if(err) throw err;
    dataClients = data.toString().replace (/"/g, `'`)
    fs.writeFile(__dirname + '/proveedores.txt', dataClients, (err) => {
        if(err) throw err;
        console.log(dataClients);
    })
})

