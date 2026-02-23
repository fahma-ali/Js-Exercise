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
// let i = 0;
// while(i<5){
//     console.log("iteration number "+i)
//     i++;
// }

// do while loop
// let i=0;
// do{
//     console.log("iteration "+i);
//     i++;
// }while(i<5);
// let password;
// do{
//     password=prompt("Enter You Password");
// }while(password !== "123")
//     console.log("welcom user");
// for of loop

// const students=["rayaa","ali","abdi mayow"]
// for(let student of students){
//     console.log(student)
// }

// for in loop
// const student ={
//     name:"fahma",
//     age:26,
//     class:"CA175"
// }
// for(let keys in student){
//     console.log(student[keys])
// }

// conditional statement

// if statement
// let age =17;
// if(age>=18){
//     console.log("you are a dult")
// }
// else
// {
//     console.log("you are minor")
// }
// else if statement
// let age=18;
// if(age<13){
//     console.log("you are child")
// }else if(age<18){
//     console.log("you are minor")
// }else if(age<20){
//     console.log("you are teenager")
// }else{
//     console.log("you are adult")
// }

// ternary operator shorthand of if else
// let age = 20;
// let msg = age <= 20 ? "you are teenager" : "you are adult";
// console.log(msg);

// let age = 25;
//  age <= 20 ? console.log("you are teenager") :console.log("you are adult");
// ternary operator shorthand of if statement you have to use && instead of ? quation mark
// let age =18;
// age>=20 && console.log("you are adult");

// higher order method arrays

// forEach method
// let students =["kaafi","nuur","fadima"]
// console.log("use array method arrow function best way")
// students.forEach(student =>{
//     console.log("Student Name Is ",student)
// })
// console.log("console as expression function")
// students.forEach(function(student,index){
//     console.log("student name is ",student +" "+index)
// })
// remeber index is optional
//map
// let test1Numbers =[1,2,3,4,5,6,7];
// let multi = test1Numbers.map((number)=>{
//    console.log(number*2)
// })

// let numbers =[1,2,3,4,5,6,7]
// let number2 =numbers.map((number)=> number*2);
// filter method
// let numbers =[1,2,3,4,5,6]
// let evennumbers =numbers.filter((even)=> even %2 ===0)
// console.log(evennumbers);

// odd number
// let numbers =[1,2,3,4,5,6]
// let oddnumbers =numbers.filter((odd)=> odd % 2 !==0)
// console.log("odd number ",oddnumbers)
// reduce method
// let numbers =[1,2,3,4,5];
// let sum =numbers.reduce((total,num)=> total+num, 0)
// console.log(sum);
// let sum=numbers.reduce((total,num)=>{
//     return total+num;
// },0)
// console.log(sum);

// destructuring  is allows you populated exist array value to new variables every item

// old way
// let names =["ali","nuur"]
// let name1 =names[0]
// let name2 =names[1]

// console.log(name1)
// console.log(name2)
// destructuring way
// let names =["fahma","ali"]
// let[name1,name2] =names;
// console.log(name1)
// Default parameters
//  function greet(name ="Guest"){
//     console.log(`hello ${name}`)
//  }
//  greet("fahma")
//  spread operator
// let number =[1,2,3,5]
// let copynumber =[...number,6,7]
// console.log(copynumber)
// // rest operator
// function sum(...numbers){
//    return numbers.reduce((num,total)=> num+total,0)

// }
// console.log(sum(40,50)) its not array reduce uses array so its return error
// conver to array value
// console.log(sum([40,50]))

// asynchronous(syn or blocked)
// function fetUserData(){
//    alert("hi fahma say yes or no ")
//    return 5+5;
// }
// console.log("this is first line to be executed because its asynchronous");

// console.log(fetUserData())
// console.log("this is blocked untill its executed lines before")

// asynchronous (asyn or un-blocked)
// function getData(callback){
//    setTimeout(()=>{
//       const age =28;
//       callback(age)
//    },3000)
// }
// console.log("state display data")

// getData(function(age)
// {
//    console.log(age)
// })
// console.log("display data as asynchromous")

// promises
// function fetUserData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = false;
//       if (success) {
//         resolve({ id: 1, name: "fahma ali" });
//       } else {
//         reject("you failed to fetch data");
//       }
//     }, 1000);
//   });
// }

// fetUserData()
// .then((result)=>{
//    console.log("your result is ",result)
// })
// .catch((error)=>{
//    console.log(error)
// })
//replace await and async instead of then,catch
// function getUserData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const jsonData = '{"name":"Ali","age":25}';
//       resolve(jsonData);
//     }, 2000);
//   });
// }

// json
// const info ={
//    id:1,
//    name:"fahma",
//    age:40,
// }
// console.log(info)
// convert object to json now its object use stringify method
// let jsonData=JSON.stringify(info)
// console.log(jsonData)
// // const data ={
//    "id":1,
//    "name":"fahma",
//    "age":48,
// }
// console.log(data)
// convert json to object use parse method 
// let objectdata = JSON.parse(jsonData)
// console.log(objectdata)
// fetching example
// async function fetchingData() {
//    try{
//       console.log("data is fetching ...");
//       const response = await fetch("./json/data.json");
//       let data = await response.json();
//       console.log("response is  : ",data.name);

//    }catch(err){
//       console.log(err)
//    }
   
// }
// fetchingData();
// console.log("contineous fetching data")
// callback function
// function greet(name){
//  console.log("hello",name);
// }
// // greet("fahma")

// function userInput(callback){
//    const name =prompt("enter your name");
//    callback(name);
// }
// userInput(greet);
// function operate(x,y,callback){
//    return callback(x,y);
// }
// function add(a,b){
//    return a+b;
// }
// function sub(a,b){
//    return a+b;
// }
// console.log("operate add " ,operate(5,5,add))

// http request
// async function fetchData() {
//    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//       if(!response.ok){
//          throw new Error(`http error status ${response.status}`);
         
//       }
//       const data = await response.json();
//       console.log(data);
// }
// fetchData();
// http post
async function postData() {
  try{
 const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
      method:"POST",
         headers:{
            'Content-Type':'application/json'
         },
         body:JSON.stringify({
            title:"title tijabo",
            body:"body test",
            userId:1,
         })
   })
   if(!response.ok){
      throw new Error(`there is error here ${response.status}`)
   }
   console.log(response)
   const data = await response.json();
   console.log(data)
  }catch(error){
   console.log(error);
  }
}
postData();