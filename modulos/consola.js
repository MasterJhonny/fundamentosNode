let table = [
    {
        a: '1',
        b: '2',
        c: '3',
    },
    {
        e: '4',
        r: '5',
        d: '6',
    },
    {
        a: '1',
        b: '2',
        c: '3',
    },
    {
        e: '4',
        r: '5',
        d: '6',
    }
]

console.time()
console.table(table)
console.count("valor")
console.group('grupo')
console.log("mensaje:")
console.info("infromacion:")
console.error("error:")
console.groupEnd()
console.timeLog()
console.count("valor")
console.warn("alerta:")
console.count("fana")
console.count("fana")
console.count("fana")
console.count("fana")
console.count("fana")
console.count("fana")
console.count("fana")
console.timeEnd()
console.time()
console.timeEnd()


function uno(){
    console.group("fucntion: 1");
    console.log("esatamos en la function1");
    console.log("estamos sigue en la function1");
    dos();
    console.log("seguimos en la function1");
    console.groupEnd("function1");
}

function dos(){
    console.group("fucntion: 2");
    console.log("estamos en la function2");
    console.log("estamos sigue en la function2");
    console.groupEnd("fucntion: 2");
}

uno()