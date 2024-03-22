const interval = setInterval(() => {
  console.log("Hola")
}, 2000);

setTimeout(() => {
  console.log("Time Out")
  clearInterval(interval)
}, 5000);