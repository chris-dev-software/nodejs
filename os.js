const { formatoTiempo, formatoGigabytes } = require("./funciones/index.js")
const os = require("node:os")


console.table({
  tiempoEncendio: formatoTiempo(os.uptime()),
  plataforma: os.platform(),
  version: os.release(),
  memoriaTotal: formatoGigabytes(os.totalmem()),
  memoriaLibre: formatoGigabytes(os.freemem())
})