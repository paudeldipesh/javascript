let a = null;
let b = 7;
let c = true;
let d = BigInt("1234") + BigInt("5678");
let e = "dipesh";
let f = Symbol("this is a symbol");
let g;
console.log(a, b, c, d, e, f, g, typeof g);

const obj = {
    name: "dipesh",
    roll: 7,
    completed: true,
};
console.log(obj);
console.log(obj["name"]);
console.log(obj.name);

function addThreeNumbers(a, b, c) {
    return a + b + c;
}
let sumOfNumbers = addThreeNumbers(1, 2, 3);
console.log(sumOfNumbers);
