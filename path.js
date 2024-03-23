const path = require("node:path")

const rutaArchivo = path.join("/public", "dist", "/styles", "main.css")

console.log(rutaArchivo)

const baseArchivo = path.basename(rutaArchivo)

console.log(baseArchivo)

const directorioArchivo = path.dirname(rutaArchivo)

console.log(directorioArchivo)

const objetoArchivo = path.parse(rutaArchivo)

console.log(objetoArchivo)

const resolveArchivo = path.resolve("dist")

console.log(resolveArchivo)