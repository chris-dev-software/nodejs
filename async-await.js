const { readFile } = require("node:fs")

const getText = (pathFile) => {
  return new Promise((resolve, reject) => {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

const read = async () => {
  try {
    const carrera = await getText("./archivos/carrera.txt")
    console.log(mascotas)

    const mascotas = await getText("./archivo/mascotas.txt")
    console.log(carrera)

  } catch (error) {
    console.log(error)
  }
}
// read()

const { promisify } = require("util")

const readFilePromise = promisify(readFile)

const readPromise = async () => {
  try {
    const result = await readFilePromise("./archivos/curso.txt", "utf-8")
    console.log(result)
  } catch (error) {
    console.log(error.message)
  }
}

readPromise()