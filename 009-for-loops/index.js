let i;
for (i = 10; i > 0; i--) {
    console.log(i);
}

let sum = 0;
let n = prompt("Enter a number to find its sum.");
n = Number(n);
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(`Sum from 1 to ${n} is: ${sum}`);

let objOne = {
    dipesh: 89,
    ramesh: 38,
    sudip: 46,
    ram: 78,
};
for (let key in objOne) {
    console.log(`Marks of ${key} is ${objOne[key]}`);
}

let arrOne = ["dinesh", "suresh", "sudip", "shyam"];
for (let index in arrOne) {
    console.log(arrOne[index]);
}

let objTwo = {
    sanau: 89,
    manu: 38,
    aalu: 46,
    pyaaj: 78,
};
for (let key of Object.keys(objTwo)) {
    console.log(`Marks of ${key} is ${objTwo[key]}`);
}

let arrTwo = ["alex", "david", "daniel", "brock"];
for (let value of arrTwo) {
    console.log(value);
}
