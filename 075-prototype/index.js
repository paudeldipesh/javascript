let objOne = {
    id: 7,
    person: "Dipesh",
    language: "JavaScript",
    run: () => {
        alert("objOne is Running!");
    },
};

let objTwo = {
    run: () => {
        alert("objTwo is Running!");
    },
};

let objThree = {
    name: "Brock Lesner",
};

objOne.__proto__ = objTwo;
objOne.run();
objTwo.__proto__ = objThree;
console.log(objOne.name);
