const sayHello = (individual, greet) => console.log(`Hello ${individual}, ${greet}!`);
sayHello("Dipesh", "Good Morning");

const objectOne = {
    somebody: "Dipesh Paudel",
    role: "JS Developer",
    show: function () {
        console.log(this);
        console.log(`${this.somebody} is the best!`);
        let that = this;
        setTimeout(function () {
            console.log(this);
            console.log(that);
            console.log(`He is ${that.role}!`);
        }, 2000);
        return 54;
    },
};
console.log(objectOne.show());

const objectTwo = {
    fruit: "Mango",
    taste: "Sweet",
    show: function () {
        console.log(`${this.fruit} is the fruit!`);
        setTimeout(() => {
            console.log(`It is ${this.taste}!`);
        }, 2000);
        return 108;
    },
};
console.log(objectTwo.show());
