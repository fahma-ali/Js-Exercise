// first js practise 2026-2-9

// comparison operators

// let a = 10
// let b="10"
// console.log(a>=b)
// console.log(a<=b)
// console.log(a != b)
// console.log(a==b)
// console.log(a===b)
// console.log(a !==b )

// string operators

// let firstName="Fahma";
// let lastName="Ali"
// console.log("My Name is " ,firstName + "  "+ lastName)

// let greeting ="Good morning"
// // greeting = greeting+" "+firstName+" "+lastName
// greeting += " "+firstName+" "+ lastName
// console.log(greeting);

// function declaration

// function greeting() {
//     console.log("hello,world");
// }
//  greeting()

// function parameters and argument

// function greet(name){
//     console.log("hello ,  " +name)
// }
// greet("fahma ali")

// function calculateTotal(price,qty){
//     console.log("Total price is  " +price * qty);
// }
// calculateTotal(5,5);
// calculateTotal(5,6);

// return parameters
// function add(a,b){
//     return a+b;
// }
// let result= add(10,10)
// console.log(result/2)

// function expression

// const greet = function(name){
//     console.log("hello," + name);
// }
// greet("haawa");
// greet("nuur");
// greet("fatma");

// arrow functions ES6

// const salaam = (age) => {
//     console.log("My Age is :" + age);
// }
// salaam(40);

// local and global variables
// let globalvariable="hey I'm Global variable"
// function showVariable(){
//     console.log(globalvariable)
// }
//  showVariable();
//  console.log(globalvariable)

// array

let arrayname=["fahma","ali","hashi"];

console.log(arrayname);
// console.log(arrayname[0])
arrayname.push("kaafi")
arrayname.unshift("nuur")
arrayname.pop()
arrayname.shift();
console.log(arrayname);
