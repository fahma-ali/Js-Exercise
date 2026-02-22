// exercise 25
let array1 =[1,2,3]
let array2 =[4,5,6]
let combine =[...array1,...array2]
console.log(combine)

function mutiply(...numbers){
  return numbers.reduce((num,total)=> num*total,1)
}
console.log('multiplication', mutiply(5,5))
