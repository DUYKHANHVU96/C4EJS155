// BAI 1
let result = 0;
for (let i = 0; i < 100; i++) {
    result = result + i;
}
console.log(result);


// BAI 2

for (let i = 0; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i)
    }
}

// BAI 3
let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
}
console.log(factorial);

// BAI 4

for (let number = 2; number <= 9; number++) {
    console.log(`bang cuu chuong${number}`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number}*${i}=${number * i}`);
    }
}

// BAI 5
let number = 35;
let binaryString = number.toString(2);
console.log("ma nhi phan la" + binaryString);

