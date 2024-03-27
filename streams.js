const { writeFile } = require("node:fs/promises")


const createBigFile = async () => {
  await writeFile("./archivos/bigfile.txt", "Hola mundo".repeat(10000))
}

createBigFile()


const { createReadStream } = require("node:fs")

const stream = createReadStream("./archivos/bigfile.txt", {
  encoding: "utf-8"
})

stream.on("data", (chunk) => {
  console.log(chunk)
})

stream.on("end", () => {
  console.log("Finalizo")
})

stream.on("error", (error) => {
  console.log(error)
})