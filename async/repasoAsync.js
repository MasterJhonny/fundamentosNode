// function start
function start(veces) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("start...")
            resolve(veces)
        }, 2000)
    })
}

//function process
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
function process() {
    let numProcess = id.next()
    setTimeout(function() {
        console.log(`process...${numProcess.value}`)
    }, 500)
}

// function stop
function stop() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("stop...")
        }, 1000)
    })
}

// function system of generation of process
async function main() {
    await start()
    await process()
    await process()
    await process()
    await process()
    await process()
    await process()
    await process()
    await process()
    await process()
    await process()
    await stop()
}
// iniciando ...
console.log("init...")
// comenzando los process..
main()