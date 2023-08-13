const loadScriptOne = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(`Bootstrap Script: ${src}`);
        };
        document.body.append(script);
    });
};

let scriptDisplay = loadScriptOne(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
);
// console.log(scriptDisplay);
scriptDisplay.then((value) => console.log(value));

const loadScriptTwo = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(`Bootstrap Script: ${src}`);
        };
        document.body.append(script);
    });
};
const mainFunction = async () => {
    console.log(new Date().getMilliseconds());
    let getScript = await loadScriptTwo(
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
    );
    console.log(getScript);
    console.log(new Date().getMilliseconds());
};
mainFunction();

let promiseBest = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("This is not acceptable."));
        }, 3000);
    });
};

let promiseStart = async () => {
    try {
        let result = await promiseBest();
        console.log(result);
    } catch (error) {
        console.log(`Catched Error: ${error.message}`);
    }
};
promiseStart();

let promiseOne = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
};

let promiseTwo = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20);
        }, 2000);
    });
};

let promiseThree = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30);
        }, 3000);
    });
};

const awaitPromises = async () => {
    console.time("awaitPromises");
    let one = await promiseOne();
    let two = await promiseTwo();
    let three = await promiseThree();
    console.log(one, two, three);
    console.timeEnd("awaitPromises");

    console.time("awaitPromisesAll");
    let aOne = promiseOne();
    let aTwo = promiseTwo();
    let aThree = promiseThree();
    let promiseAll = await Promise.all([aOne, aTwo, aThree]);
    console.log(promiseAll);
    console.timeEnd("awaitPromisesAll");
};
awaitPromises();
