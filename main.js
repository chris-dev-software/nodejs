const { presentacion } = require("./saludos/index.js")
const { multiplicar, dividir } = require("./operaciones/index.js")
const { separacion } = require("./diseño/index.js")
const { usuario, numero1, numero2 } = require("./data/index.js")

let nombre = usuario.nombre
let edad = usuario.edad
let carrera = usuario.carrera

const resultado = presentacion(nombre, edad, carrera)

console.log(resultado)

const resultadoMultiplicar = multiplicar(numero1, numero2)
const resultadoDividir = dividir(numero1, numero2)

separacion()

console.log(`El resultado de la multiplicación es: ${resultadoMultiplicar}`)
console.log(`El resultado de la división es: ${resultadoDividir}`)
