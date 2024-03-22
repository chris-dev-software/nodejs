// let username = 'chris-dev'

// let age = 20

// let hasHobbies = false

// let points = [12, 20, 12]

// let user = {
//   name: 'christopher',
//   lastname: 'romero'
// }

// const PI = 3.1415

// console.log(username)
// console.log(age)
// console.log(hasHobbies)
// console.log(points)
// console.log(user)
// console.log(PI)

// const age = 17
// if (age >= 18) {
//   console.log('You are an adult')
// } else if (age >= 13) {
//   console.log("You are a teenager")
// }
// else {
//   console.log("You are a child")
// }

// const names = ['joe', 'john', 'marco']

// for (let i = 0; i < names.length; i++) {
//   const element = names[i]
//   console.log(element)
// }

function showUserInfo(userName, useAge) {
  return `The username is ${userName}, the user is ${useAge} years old`
}

const infoUserChristopher = showUserInfo('christopher', 20)
console.log(infoUserChristopher)

const infoUserMaria = showUserInfo('maria', 22)
console.log(infoUserMaria)