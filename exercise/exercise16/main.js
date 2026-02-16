// exercise 17
let temperature = Number(prompt("Enter temperature:"));
if(temperature<0){
  console.log("Temperature is : very cold")
}else if(temperature<15){
  console.log("Temperature is : cold")
}else if(temperature<25){
console.log("Temperature is : warm")
}else{
  console.log("Temperature is : hot")
}