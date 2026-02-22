
// exercise 29
async function fetData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log("response data is :", data)
    console.log("response data is :", data[0].name)

  } catch {

  }

}
fetData();