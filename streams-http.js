import http from "node:http"

import { createReadStream } from "node:fs"

const server = http.createServer((req, res) => {
  const stream = createReadStream("./archivos/bigfile.txt", {
    encoding: "utf-8"
  })

  stream.on("data", (chunk) => {
    stream.pipe(res)
  })

  stream.on("error", (error) => {
    console.log(error)
  })
})

server.listen(3000)
console.log("Server corriendo en http://localhost:3000")