const promiseUse = async (text, timeout = 1) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, timeout * 1000);
    });
};

(async () => {
    console.log(await promiseUse("Hello! (resolve in 3 second).", 3));

    console.log(await promiseUse("World! (resolve in 1 second)."));
})();

const sum = (a, b, c) => a + b + c;
let arrEl = [2, 4, 6, 8];
console.log(sum(1, ...arrEl));

function simpleInterest(p, t, r) {
    return (p * t * r) / 100;
}
console.log(simpleInterest(100000, 2, 10));
