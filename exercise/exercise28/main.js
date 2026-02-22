// exercise 2
function prepareTea() {
  return new Promise((resolve, reject) => {
    let tea = prompt("is tea ready yes/no");
    if (tea === "yes") {
      resolve("you can take your tea");
    } else {
      reject("sorry kitchen problem occur");
    }
  });
}
// async/await you can replace then,catch

async function maketea() {
  try {
    const data = await prepareTea();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
maketea();