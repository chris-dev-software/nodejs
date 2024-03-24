const { readFile } = require("node:fs")

const getText = (pathFile) => {
  return new Promise((resolve, reject) => {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

getText("./archivos/nombr.txt")
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })

