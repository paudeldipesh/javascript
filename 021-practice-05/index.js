let arr = [1, 2, 3, 4, 5];
let num = prompt("Enter a number");
num = Number(num);
arr.push(num);
console.log(arr);

let zeroAdd = [1, 2, 3, 4, 5];
let zeroNum;
do {
    zeroNum = prompt("Enter a number");
    zeroNum = Number(zeroNum);
    if (zeroNum !== 0) {
        zeroAdd.push(zeroNum);
        console.log(zeroAdd);
    }
} while (zeroNum !== 0);

let arrFilter = [1, 34, 10, 2, 40, 100, 56];
let newArr = arrFilter.filter((num) => num % 10 === 0);
console.log(newArr);

let nonSq = [1, 2, 3, 4, 5];
let squareArr = nonSq.map((numSq) => Math.pow(numSq, 2));
console.log(squareArr);

let fact = [1, 2, 3, 4, 5];
let factNum = fact.reduce((num1, num2) => num1 * num2);
console.log(factNum);
