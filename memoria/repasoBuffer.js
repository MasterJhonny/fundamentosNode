// let buffer = Buffer.alloc(1)
// let buffer = Buffer.from([1,2,3,4,5])
// let buffer = Buffer.from('Hola mundo!')


let abc = Buffer.alloc(26)

for (let i = 0; i < 26; i++) {
    abc[i] = i + 97;
}
console.log(abc.toString())


let text = '68 6f 6c 61';
console.log(Buffer.from(text))