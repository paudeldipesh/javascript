var message = "Hello External";
function helloFunction() {
    let message = "Hello Internal";
    let functionValue = function myFunction() {
        console.log(`This is function with message "${message}".`);
    };
    message = "Hello Final";
    return functionValue;
}
let finalValue = helloFunction();
finalValue();

const returnFunction = () => {
    const x = () => {
        let a = 1;
        console.log(a);
        const y = () => {
            // let a = 2;
            console.log(a);
            const z = () => {
                // let a = 3;
                console.log(a);
            };
            z();
        };
        a = 99;
        y();
    };
    return x;
};
let resultValue = returnFunction();
resultValue();

let person = "dipesh";
function human() {
    console.log(`my name is ${person}`);
}
human();

const someone = {
    name: "John Doe",
    age: 30,
};

with (someone) {
    console.log(name);
    console.log(age);
}
