let num = [1, 2, 3, 4];
console.log(num);
console.log(num.length);

console.log(delete num[0]);
console.log(num);
console.log(num.length);

let mun = [5, 6, 7, 8];
let nun = [9, 10];
console.log(num.concat(mun, nun));

let sortArr = [12, 1, 67, 6, 83, 100];
let sortedArr = sortArr.slice().sort((a, b) => a - b);
console.log(sortedArr);
console.log(sortedArr.reverse());

let person = ["ram", "shyam", "gita", "ganesh", "shiva", "parvati"];
let spliceEl = person.splice(1, 2, "krishna", "bishnu", "narayan");
console.log(spliceEl);
console.log(person);

let index = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(index.slice());
console.log(index.slice(3));
console.log(index.slice(4, 7));
