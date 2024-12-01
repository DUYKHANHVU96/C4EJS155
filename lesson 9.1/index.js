// CAU1
const student = { name: "John", age: 20 };
student.major = "Computer Science"
console.log(student);

// // CAU2
// const person = { name: "Alice", age: 25, job: "Designer" }
// console.log(person);
// delete person.job;
// console.log(person.job);

// CAU3
// const car = { brand: "Toyota", model: "Camry", year: 2020 };
// const count = Object.keys(car).length;
// console.log(count);

// OR
const car = { brand: "Toyota", model: "Camry", year: 2020 };
let n = 0
for (let key in car) {
  console.log(key);
  n = n + 1
}
console.log(n);

// CAU4
const product = { name: "Laptop", price: 1000 };
let product={}