// exercise 15

const people = [
  {
    name: "Alice",
    age: 25,
    city: "wonderland",
  },
  {
    name: "bob",
    age: 30,
    city: "BuilderLand",
  },
  {
    name: "charlie",
    age: 35,
    city: "chocolate factory",
  },
];
console.log("Properies and values of each person");

for (object of people) {
  for (const key in object) {
    console.log(key + " : " + object[key]);
  }
  console.log("--------");
}
