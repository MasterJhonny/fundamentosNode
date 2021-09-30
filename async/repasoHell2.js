// function start
function start(veces, callback) {
    setTimeout(function() {
        console.log("start...")
        callback(veces)
    }, 2000)
}

//function process
function process(veces, num, callback) {
    setTimeout(function() {
        console.log(`process...${num}`)
        callback(veces, callback)
    }, 500)
}

// function stop
function stop() {
    setTimeout(function() {
        console.log("stop...")
    }, 1000)
}
// function generation ids
function* genId(){
    let id = 1;
    while (true) {
        yield id;
        id++;
    }
}
// gen id 
let id = genId();

// function system of generation of process
function system(veces, callback){
    let valor = id.next()
    if(veces >= valor.value){
        process(veces, valor.value, function(num){
            system(num, callback);
        });
    } else {
        callback();
    }
}
// iniciando ...
console.log("init...")
// comenzando los process..
start(10, function(veces){
    // run veces process
    system(veces, stop)
})



























// start(1, function(num) {
//     process(num, function(num) {
//         process(num, function(num) {
//             process(num, function(num) {
//                 process(num, function(num) {
//                     process(num, function(num) {
//                         process(num, function(num) {
//                             process(num, function(num) {
//                                 process(num, function(num) {
//                                     process(num, function(num) {
//                                         stop();
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })