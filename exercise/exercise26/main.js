// exercise 26
// synchronous or blocking 
console.log(" start here synchronous");

function prepareTeaSyn(){
 alert("Is Tea ready")
 return "you can take your tea";
}

console.log(prepareTeaSyn())
console.log("enjoy your tea");
console.log("end synchronous");

console.log("below result is asynchronous");
function prepareTeaAsync(){
  console.log("Boiling water...");

  setTimeout(() => {
    console.log("Your tea is ready!");
  }, 2000);

  console.log("Fahma You can wash cups while waiting.");
}

prepareTeaAsync();