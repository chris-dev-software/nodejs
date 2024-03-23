const http = require("node:http")

http.createServer((req, res) => {

  if (req.url === "/") {
    res.write("Bienvenido al servidor")
    return res.end()
  }

  if (req.url === "/about") {
    res.write("Acerca de")
    return res.end()
  }

  res.write("<h1>Página no encontrada</h1>")
  res.end()

}).listen(3000)

console.log("Servidor en http://localhost:3000")