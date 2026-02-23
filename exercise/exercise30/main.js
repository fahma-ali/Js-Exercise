
// exercise 30
function operate(x,y,callback){
  return callback(x,y)
}
function multiply(a,b){
  return a * b;
}
function divide(a,b){
  return a / b;
}
console.log(`multiplication of ${operate(5,6,multiply)} `)
console.log("division ",operate(100,5,divide))