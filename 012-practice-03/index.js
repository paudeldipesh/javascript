const marks = {
    dipesh: 79,
    suresh: 58,
    rajesh: 45,
    rameshwor: 67,
};
console.log(Object.keys(marks));

for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log(`The marks of ${Object.keys(marks)[i]} is ${marks[Object.keys(marks)[i]]}`);
}

const confidence = {
    Dipesh: 100,
    Suresh: 58,
    Rajesh: 45,
    Rameshwor: 67,
};

for (let key in confidence) {
    console.log(`${key} confidence is ${confidence[key]}%`);
}

const correctNumber = 7;
let num;
do {
    console.log("Try again!");
    num = Number(prompt("Enter A Number?"));
} while (num !== correctNumber);
console.log("Correct!");

const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4;
};
console.log(mean(1, 2, 3, 4));
