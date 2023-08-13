let promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promiseOne resolve after 4 second.");
        // reject(new Error("There is an error in the code."));
    }, 2000);
});

let promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promiseTwo resolve after 4 seconds.");
    }, 4000);
});

let promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promiseThree resolve after 3 seconds.");
    }, 3000);
});

promiseOne.then((value) => console.log(value));
promiseTwo.then((value) => console.log(value));
promiseThree.then((value) => console.log(value));

let promiseAll = Promise.all([promiseOne, promiseTwo, promiseThree]);
promiseAll.then((value) => console.log(value));

let promiseAllSettled = Promise.allSettled([promiseOne, promiseTwo, promiseThree]);
promiseAllSettled.then((arrayValue) => {
    for (let index of arrayValue) {
        console.log(index.value);
    }
});

let promiseRace = Promise.race([promiseOne, promiseTwo, promiseThree]);
promiseRace.then((value) => console.log(value));

let promiseAny = Promise.any([promiseOne, promiseTwo, promiseThree]);
promiseAny.then((value) => console.log(value));

let promiseResolve = Promise.resolve(7);
promiseResolve.then((value) => console.log(value));

// let promiseReject = Promise.reject(new Error("Made promises with error."));
// promiseReject.then((error) => console.log(error));
