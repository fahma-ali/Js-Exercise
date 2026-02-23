
// exercise 31
async function getData() {
 try{
 const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()
  console.log(users)
 }catch(err){
 console.log(err);
 }
}
getData()