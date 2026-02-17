// exercise 21
let numbers =[1,2,3,4,5]
let multi =numbers.reduce((previousAmount,currentAmount)=>{
    return previousAmount*currentAmount;
},1)

console.log("multiplication of array is",multi)