console.time("todo")

let add1 = 0;
console.time("bucle1")
for (var i = 0; i < 100000000; i++) {
    add1 += i;
}
console.timeEnd("bucle1")


// setInterval(() => {
//     // console.time("time")
//     let data = new Date()
//     let hora = data.getHours()
//     let min = data.getMinutes()
//     let sec = data.getSeconds()
//     // console.log(`${hora}:${min}:${sec}`)
//     // console.timeEnd("time")
// }, 999.5)


let add2 = 0;

console.time("bucle2")
for (var j = 0; j < 1000000000; j++) {
    add2 += j;
}
console.timeEnd("bucle2")

console.time("Async")
console.log("start Async")
asincrona()
    .then(()=> {
        console.timeEnd("Async")
    })



console.timeEnd("todo")


function asincrona () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
            console.log("Process End")
        })
    })
}