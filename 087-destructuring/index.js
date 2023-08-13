const [a, , , d, ...rest] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a, d, ...rest);

const { id, person, position, subject } = {
    id: 7,
    person: "dipesh",
    position: "learning",
    subject: "BCA",
};
console.log(id, person, position, subject);

let arrayOne = ["apple", "mango", "banana", "orange"];
let objectOne = { ...arrayOne };
console.log(objectOne);

let arrayTwo = [1, 2, 3, 4];
const sum = (a, b, c) => {
    return a + b + c;
};
console.log(sum(...arrayTwo));

let objectTwo = {
    name: "Insane",
    company: "OPG Group",
    address: "right share",
};
console.log({ ...objectTwo, name: "Fursat" });
