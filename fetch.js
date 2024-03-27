// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => response.json())
//   .then(data => console.log(data))

const loadData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

loadData()