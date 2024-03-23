function sumar(numero1, numero2) {
  const resultado = numero1 + numero2
  return resultado
}

function restar(numero1, numero2) {
  const resultado = numero1 - numero2
  return resultado
}

function multiplicar(numero1, numero2) {
  const resultado = numero1 * numero2
  return resultado
}

function dividir(numero1, numero2) {
  const resultado = numero1 / numero2
  return resultado
}

module.exports = {
  sumar,
  restar,
  multiplicar,
  dividir
}