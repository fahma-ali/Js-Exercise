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



//SCOPE BLOCK Section

// local and global variables
// let globalvariable="hey I'm Global variable"
// function showVariable(){
//     console.log(globalvariable)
// }
//  showVariable();
//console outside of the function

//  console.log(globalvariable)

// {
//     let name ="ustaad hamouda"
//     const age=26;
//     var birthdate ="2025"
    //expression function and arrow function did not access outside when its local variable

    // const showVariable =function(){
    //     let localvariable="i am localvariable"
    //     console.log(localvariable)
    // }
    //     showVariable()
    //declararion function can acces outside and inside of the block its works like var its global function
//     function showVariable(){
//         let localvariable ="I am local variable"
//         console.log(localvariable)
//     }
//             showVariable()

// }
//         showVariable()

// array store multiple value in single variable

// let arrayname=["fahma","ali","hashi"];

// console.log(arrayname);
// console.log(arrayname[0])
// arrayname.push("kaafi")
// arrayname.unshift("nuur")
// arrayname.pop()
// arrayname.shift();
// console.log(arrayname);

// object store detailed value
// let person= {
//     name:"fahma",
//     age:26,
//     city:"mogadishu",
// }

    // console.log(person)
    // console.log(person.city);
    // console.log(person.age)
    // //like array structure
    // console.log(person["age"])
    // person.name="Nasra";
    // console.log(person)
    // person.birthdate="1999-05-25"
    // console.log(person)
    // let person2 ={
    //     name:"Haliima",
    //     age:27,
    //     greet :   () =>{
    //         console.log("Hello ",this.name)

    //     }

    // }
    // console.log(person2.name)
    // console.log(person2.greet())

    //array of object its combining of array and object
    // let arrayStudent=["ali","ahmed","fahma"];
    // let students=[
    //     {
    //         name:"ali",
    //         age:25,
    //         class:"CA171"
    //     },
    //     {
    //         name:"ahmed",
    //         age:50,
    //         class:"CA762"
    //     }
    // ]
    // console.log(students[0])
    // console.log(students[1])
    // console.log(students[0].name)


// loops

// for(let i=0; i<10; i++){
//     console.log(i)
// }

// for(let k=1; k<=20; k++){
//     console.log("the value of key :",k)
// }
// for loop using array

// let studentArray =["kaafi","rayaan","abdow","aliza"]
// for(let i =0; i< studentArray.length; i++){
//     console.log(studentArray[i]);
// }
// while loop
let i = 0;
while(i<5){
    console.log("iteration number "+i)
    i++;
}