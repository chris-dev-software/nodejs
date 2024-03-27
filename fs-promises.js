const { readFile } = require("node:fs/promises")

const readText = async () => {
  try {
    const result = await readFile("./archivos/carrera.txt", "utf-8")
    console.log(result)
  } catch (error) {
    console.log(error.message)
  }
}

readText()