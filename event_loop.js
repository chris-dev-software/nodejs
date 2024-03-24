const http = require("node:http")

const server = http.createServer((req, res) => {
  if ((req.url === "/")) {
    res.write("Bienvenido al servidor")
    return res.end()
  }
  if ((req.url === "/about")) {
    //task
    // for (let i = 0; i < 10000; i++) {
    //   console.log(Math.random() * i)
    // }

    res.write("Bienvenido a la seccion de nosotros")
    return res.end()
  }

  res.write("No encontrado")
  res.end()
})

server.listen(3000)
console.log("Servidor en puerto 3000")