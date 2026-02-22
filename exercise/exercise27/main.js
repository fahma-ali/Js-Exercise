// exercise 27
function PrepareTea() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let tea = prompt("Is Tea Ready(yes/no)");
      if (tea === "yes") {
        resolve("Your Tea is Ready");
      }
      else {
        reject("we sorry kitchen error occur");
      }
    }, 2000)

  })
}

PrepareTea()
.then((result) => {
  console.log(result);
})
  .catch((err) => {
    console.log(err);
  })


