const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

const marks = [45, 28, 38, 49, 50];
for (let value of marks) {
    console.log(value);
}

const products = ["biscuits", "noodles", "chocolates", "soaps", "onions"];
for (let key in products) {
    console.log(products[key]);
}

const forEachArray = ["ram", "krishna", "bishnu", "shiva"];
forEachArray.forEach((nam) => console.log(nam));

const obj = {
    name: "John Doe",
    age: 30,
    city: "New York",
};
console.log(Object.keys(obj));

let nam = "DIPESH";
console.log(Array.from(nam));
