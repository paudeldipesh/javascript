let promiseOne = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(7);
        }, 2000);
    });
};

let awaitFunction = async () => {
    let awaitOne = await promiseOne();
    console.log(awaitOne);
    let awaitTwo = await promiseOne();
    console.log(awaitTwo);
    let awaitThree = await promiseOne();
    console.log(awaitThree);
};
awaitFunction();

(async () => {
    let awaitOne = await promiseOne();
    console.log(awaitOne);
    let awaitTwo = await promiseOne();
    console.log(awaitTwo);
    let awaitThree = await promiseOne();
    console.log(awaitThree);
})();
