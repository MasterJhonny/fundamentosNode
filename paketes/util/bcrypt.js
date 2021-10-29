const bcrypt = require('bcrypt');

let password = '12345segura!'
let hashpad = '';
let passwordNull = 'asdfkjasdkf';
bcrypt.hash(password, 5, (err, hash) => {
    if(err) throw err;
    hashpad = hash;
    console.log(hashpad);
})

setTimeout(() => {
    bcrypt.compare(passwordNull, hashpad, (err, hash) => {
        if(err) throw err;
        console.log(hash);
    })
}, 2000)