const calculate = (a, b, callback) => {
    return callback(a, b);
};
const add = (num1, num2) => {
    return num1 + num2;
};
const sub = (num1, num2) => {
    return num1 - num2;
};
console.log(calculate(4, 8, add));
console.log(calculate(8, 3, sub));

const getLemon = () => {
    const lemon = "🍋";
    return lemon;
};
console.log(getLemon());

const displayBurger = () => {
    setTimeout(() => {
        const burger = "🍔";
        return burger;
    }, 2000);
};
console.log(displayBurger());

function getCheese(callback) {
    setTimeout(() => {
        const cheese = "🧀";
        console.log(`Here is the cheese. ${cheese}`);
        callback(cheese);
    }, 2000);
}

function makeDough(cheese, callback) {
    setTimeout(() => {
        const dough = `${cheese}🫓`;
        console.log(`Here is the dough. ${dough}`);
        callback(dough);
    }, 4000);
}

function bakePizza(dough, callback) {
    setTimeout(() => {
        const pizza = `${dough}🍕`;
        console.log(`Here is the pizza. ${pizza}`);
        callback(pizza);
    }, 6000);
}

getCheese((cheese) => {
    makeDough(cheese, (dough) => {
        bakePizza(dough, (pizza) => {
            console.log(`Your pizza has been delivered. "${pizza}"`);
        });
    });
});
