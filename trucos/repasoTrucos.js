console.time("Todo")

let suma1, suma2, suma3;

function add(name, value, count) {
    console.time(name)
    for (var i = 0; i < count; i++) {
        value += i;
    }
    console.timeEnd(name)
}


add('suma1', suma1, 1000000000)
add('suma2', suma2, 1000000000)
add('suma3', suma3, 1000000000)

console.time('Async')
asincrona()
    .then(() => {
        console.timeEnd('Async')
    })


console.timeEnd("Todo")


function asincrona () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('porcess Async ...');
            resolve();
        }, 1000)
    })
}