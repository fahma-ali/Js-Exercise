// const header =document.getElementById("header");
// console.log(header)
// const text =document.getElementsByClassName("text")[0];
// console.log(text)
// const btn =document.getElementsByTagName("button")[0];
// console.log(btn)
// const header =document.querySelectorAll("p");
// console.log(header)
const text =document.querySelector(".text");
console.log(text);
function changeElement(){
    text.textContent ="paragraph3";
}
function changeContent(){
    text.innerHTML=`<h2>test</h2>`
}