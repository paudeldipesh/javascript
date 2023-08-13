localStorage.setItem("lord", "mahadev");
console.log(localStorage.getItem("lord"));

let key = prompt("Enter key of the localStorage?");
let value = prompt("Enter value of the localStorage?");
localStorage.setItem(key, value);

if (key == "red" || key == "blue") {
    localStorage.removeItem(key);
}
console.log(`Key=${key} and value=${value}.`);

if (key == 0) {
    localStorage.clear();
}

console.log(localStorage.length);
console.log(localStorage.key(0));
