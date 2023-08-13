let promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("This is the promiseOne and it is resolved.");
        resolve(7);
    }, 2000);
});

let promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("This is the promiseTwo and it is rejected.");
        reject(new Error("Dipesh Paudel is responsible for the error."));
    }, 2000);
});

console.log(promiseOne, promiseTwo);

promiseOne.then((value) => console.log(value));

promiseTwo.then(
    (value) => console.log(value),
    (error) => console.log(error.message)
);
