//event emiter
const { readFile } = require("node:fs/promises")
const { EventEmitter } = require("node:events")

const customEmitter = new EventEmitter()

customEmitter.on("response", (data) => {
  console.log(data)
})

const readText = async () => {
  try {
    const nombre = await readFile("./archivos/nombre.txt", "utf-8")
    const carrera = await readFile("./archivos/carrera.txt", "utf-8")
    customEmitter.emit("response", {
      nombre,
      carrera
    })
  } catch (error) {
    console.log(error)
  }
}

readText()