// const arrNumber = [1, 2, 3];
// /* // nhân đôi các phần tử trong mảng
// // phương thức map giúp thay đổi các phần tử mảng ban đầu
// // dựa trên 1 logic được trả về nào đó */
// const doubleArrNumber = arrNumber.map((item) => {
//     return item * 2;
// });
// console.log(doubleArrNumber);

// const numbers = [1, 2, 3, 4, 5];
// // lọc ra các phần tử chẵn trong mảng trên
// // chia 2 dư 0
// const evenNumbers = numbers.filter((item) => {
//     return item % 2 === 0;
// });
// console.log(evenNumbers);

// const newArrNumber = [1, 2, 4, 5, 6];
// /* // thực hiện thêm 2 phần tử 10, 11 bắt đầu từ vị trí 1;
// // -> [1, 10, 11, 2, 4, 5, 6] */
// newArrNumber.splice(1, 0, 10, 11);
// console.log(newArrNumber);

// BÀI 1
let names1 = ["John", "Alice"];
const addName = "Tom";
names1.push(addName);
console.log(names1);

// BÀI 2
let arrNumber2 = [1, 2, 3, 4];
const mapArrNumber2 = arrNumber2.map((item) => {
    return item ** 2;
});
console.log(mapArrNumber2);

// BÀI 3
const numbers3 = [5, 10, 15, 20, 25];
const oddnumbers3 = numbers3.filter((item) => {
    return item % 2 === 0;
});
console.log(oddnumbers3);

// BÀI 10
const numbders10 = [1, 2, 3];
const numbders11 = [...numbders10, 4];
console.log(numbders11);

// BÀI 11

const person12 = { name: 'Alice', age: 25 };
const person12_1 = { job: 'Developer' };
const person12_2 = { ...person12, ...person12_1 };
console.log(person12_2);

// BÀI 12
const names13 = ['john', 'alice', 'tom'];
const newNames13 = names13.map((item) => {
    return item.toUpperCase();
});
console.log(newNames13);

// BAI 4
const listSt = [
    { name: 'John', score: 7 },
    { name: 'Alice', score: 9 },
    { name: 'Tom', score: 8 }
];
const foundSt = listSt.find((student) => {
    return student.score >= 8;
});
console.log(foundSt);

// BAI 5
const numbers5 = [3, 5, 8, 12, 15];
const index = numbers5.findIndex(number => number > 10);
console.log(index);

// BAI 6
const alphabet = ['a', 'b', 'c', 'd', 'e'];
alphabet.splice(3, 1, 'f');
console.log(alphabet);

// BAI 7
const obj = { name: 'Tom', age: 21, major: 'Computer Science' };
console.log(Object.keys(obj));

// BAI 8
const obj8 = { name: 'Tom', age: 21, major: 'Computer Science' };
console.log(Object.values(obj8));

// BAI 9
const obj1 ={ a: 1, b: 2 };
const obj2 ={ c: 3, d: 4 };
const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj);

// BAI 13

