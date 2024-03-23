function presentacion(nombre, edad, carrera) {
  const resultado = `Hola me llamo ${nombre} \nTengo ${edad} años \nSoy de la carrera de ${carrera}`
  return resultado
}

module.exports = {
  presentacion
}