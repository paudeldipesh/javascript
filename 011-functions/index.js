function onePlusAvg(a, b) {
    console.log("Done");
    return Math.round(1 + (a + b) / 2);
}
let a = 1;
let b = 2;
let c = 3;
console.log("one plus average of a and b is", onePlusAvg(a, b));
console.log("one plus average of b and c is", onePlusAvg(b, c));
console.log("one plus average of a and c is", onePlusAvg(a, c));

const sum = (p, q) => {
    return p + q;
};
console.log(sum(1, 2));

const hello = () => {
    return console.log("Hello World!");
};
hello();
