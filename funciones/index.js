function formatoTiempo(segundosTotales) {
  const horas = Math.floor(segundosTotales / 3600)
  const minutos = Math.floor((segundosTotales % 3600) / 60)
  const segundos = Math.floor(segundosTotales % 60)
  const resultado = `${horas}h:${minutos}m:${segundos}s`
  return resultado
}

function formatoGigabytes(bytes) {
  const gigabytes = bytes / Math.pow(1024, 3)
  return gigabytes
}

module.exports = {
  formatoTiempo,
  formatoGigabytes
}