const bcrypt = require('bcrypt');

let password = "holaSegura!"
let hashpassword;

bcrypt.hash(password, 7, (err, hash) => {
    if(err) throw err;
    hashpassword = hash;
    console.log(hashpassword);
})

setTimeout(() => {
    bcrypt.compare(password, hashpassword, (err, data) => {
        if(err) throw err;
        console.log(data)
    })
}, 3000)