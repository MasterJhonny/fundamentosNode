// this is module

function isEven(number) {
    if(isNaN(number)) throw new Error("el valor no es valido!")
    let mod = number % 2;
    if(mod === 0) {
        return true;
    } else if(mod === 1) {
        return false;
    }
}

module.exports = isEven;