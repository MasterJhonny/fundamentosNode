console.log("start");

let valor = 0, valor2 = 10000;
let TIME = 400;

setInterval(function(){
    console.log(`${++valor}`);
    if(valor === 20){
        try {
            var nam = 44 + w;
        } catch (error) {
            console.error("\nUpss fallo Algo en este hilo ..\n");
        }
    }
}, TIME)

setInterval(function(){
    console.log(`           ${--valor2}`);
    if(valor2 === 9970){
        try {
            var nam = 44 + t;
        } catch (error) {
            console.error("\nUpss volvio a fallar Algo..\n");
        }
    }
}, 300)

console.log("poll action...")

function otraAction() {
    setTimeout(() => {
    console.log("poll action...");
    }, 5000)
}

otraAction();
function otraAction3(){
    setTimeout(() => {
        console.log("Otra action......")
    }, 3000)
}


otraAction3()
function otraAction4(){
    console.log("Otra action... otro modo")
}
otraAction4()