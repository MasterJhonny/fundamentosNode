const faker = require('faker');
const fs = require('fs');
function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randonMat() {
    let materias = [
        'TALLER DE EXPRESIÓN ORAL',
        'MATEMÁTICA I',
        'MÉTODOS DE ESTUDIO',
        'EMPRENDIMIENTO',
        'MATEMÁTICA FINANCIERA',
        'MICROECONOMÍA',
        'MARKETING',
        'MACROECONOMÍA',
        'COSTOS',
        'INVESTIGACIÓN DE MERCADOS',
        'DERECHO EMPRESARIAL',
        'MARKETING ESTRATÉGICO',
        'GERENCIA DE PROYECTOS',
        'FINANZAS',
        'TECNOLOGIA DE CONCRETO',
        'RAZONAMIENTO LOGICO MATEMATICO',
        'MECANICA DE FLUIDOS',
        'LIDERAZGO ORGANIZACIONAL',
        'INTRODUCCION A LA INGENIERIA',
        'ADMINISTRACIÓN',
        'LOGICA Y ALGORITMOS',
        'ECONOMÍA',
        'ALGORITMOS Y ESTRUCTURA DE DATOS',
        'ESTADÍSTICA Y PROBABILIDADES',
        'PROGRAMACIÓN LINEAL',
        'ESTADISTICA INFERENCIAL',
        'MATEMÁTICAS DISCRETAS',
        'FUNDAMENTOS DE BASE DE DATOS',
        'SISTEMAS OPERATIVOS',
        'SISTEMAS DE BASE DE DATOS',
        'INGENIERIA DE SOFTWARE'
    ];
    return materias[numeroAleatorio(1, 31)]
}

function generatePerson (count) {
    let data = '';
    for(let i = 0; i < count; i++) {
        let anio = numeroAleatorio(1985, 2001);
        let mes = numeroAleatorio(1,12);
        let dia = numeroAleatorio(1,31);
        let name = faker.name.firstName();
        let date = `${anio}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}`
        let pais = faker.address.country();
        data += `('${name}', '${date}', '${pais}'),\n`
    }
    return data;
}

function dataMat (count) {
    let data = '';
    for (let i = 0; i < count; i++) {
        let name = randonMat();
        let cupos = numeroAleatorio(70, 90)
        data += `('${name}', '${cupos}'),\n`
    }
    return data;
}

function notas (count){
    let data = ''
    for (let i = 0; i < count; i++) {
        let mat_id = numeroAleatorio(1, 40)
        let s_id = 0; 
        if(i < 10) {
            s_id = numeroAleatorio(24, 33)
        } else {
            s_id = numeroAleatorio(316, 409)
        }
        data += `(${mat_id}, ${s_id}),\n`
    }
    return data;
}

function products (count) {
    let data  = '';
    for (let i = 0; i < count; i++ ) {
        let anio = numeroAleatorio(2021, 2023);
        let mes = numeroAleatorio(1,12);
        let dia = numeroAleatorio(1,31);
        let name = faker.commerce.product();
        let date = `${anio}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}`
        let cantidad = numeroAleatorio(100, 500)
        let cost = parseInt(faker.commerce.price(20, 720, 2))
        let price = cost + 10;
        let por_id = numeroAleatorio(11, 20)
        data += `('${name}', '${date}', ${cantidad}, ${price}, ${cost}, ${por_id}),\n`
    }
    return data;
} 

function ventas () {
    let data = ''
    for (let i = 0; i < 70; i++){
        let ven_id = numeroAleatorio(1, 30)
        let cli_id = numeroAleatorio(51, 150)
        let monto = numeroAleatorio(120, 1720)
        data += `(${ven_id}, ${cli_id}, ${monto}),\n`
    }
    return data;
}

function ventasPor () {
    let data = ''
    for (let i = 0; i < 50; i++){
        let ventas_id = numeroAleatorio(1, 70)
        let pro_id = numeroAleatorio(141, 210)
        let cant = numeroAleatorio(1, 27)
        data += `(${ventas_id}, ${pro_id}, ${cant}),\n`
    }
    return data;
}

let data = ventasPor()

fs.writeFile(__dirname + '/por.txt', data, (err) => {
    if(err) throw err;
    console.log(data)
})



