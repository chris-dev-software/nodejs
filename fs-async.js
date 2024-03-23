const fs = require("node:fs")

fs.readFile("./archivos/nombre.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error)
    return
  }
  console.log(data)
})

fs.readFile("./archivos/curso.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error)
    return
  }
  console.log(data)
})

const mascotas = ["Kira", "Ramona", "Pelusa", "Galleta", "Chavo", "Pantera"]

fs.writeFile("./archivos/mascotas.txt", mascotas.join(" | "), (error, data) => {
  console.log("Archivo creado")
})