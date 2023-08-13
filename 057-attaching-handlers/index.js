let promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        let a = 3;
        let b = 4;
        sum = a + b;
        resolve(sum);
    }, 2000);
});

promiseOne.then((value) => console.log(`Resolved promiseOne with the value: "${value}"`));
promiseOne.then((value) => console.log(`Resolved promiseOne with the value: "${value * 3}"`));

promiseOne
    .then((value) => {
        console.log(`First process of API fetching is done. ${value}`);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`Middle process of API fetching is done. ${value * 10}`);
                resolve(100);
            }, 2000);
        });
    })
    .then((value) =>
        setTimeout(() => {
            console.log(`Last process of API fetching is done. ${value + 30}!`);
        }, 2000)
    );
