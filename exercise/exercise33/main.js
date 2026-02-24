
// exercise 33
const firstName =document.querySelector("label")
console.log(firstName);
const addinput =document.querySelector("legend")
console.log(addinput);
const btn = document.querySelector("button");
console.log(btn)
function changeElement(){
    firstName.textContent ="First Name"
}
function changeContent(){
    addinput.innerHTML =`<label>Midle Name</label><input type ="text"></br>`
}