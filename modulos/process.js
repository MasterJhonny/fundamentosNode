console.log('Running')


process.on('exit', () => {
    console.log('el process se ha acabado...')
    setTimeout(() => {
        console.log('el no se vera')
    }, 0)
})


process.on('beforeExit', () => {
    console.log('el process this ha puntoo de acabado...')
})

process.on('uncaughtException', (error, origin) => {
    console.log('nos olvidamos capturar un error...')
    console.log(error)
    setTimeout(() => {
        console.log('el si se vera')
    }, 0)
})

let i = 0;
// setInterval(() => console.log(i++), 1000)

functionNull()

console.log('end')