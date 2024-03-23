const fs = require("node:fs")

const nombre = fs.readFileSync("./archivos/nombre.txt", 'utf-8')
const curso = fs.readFileSync("./archivos/curso.txt", 'utf-8')

console.log(nombre)
console.log(curso)

const carrera = "Ingenieria de sistemas computacionales"

fs.writeFileSync("./archivos/carrera.txt", carrera, {
  flag: "a"
})