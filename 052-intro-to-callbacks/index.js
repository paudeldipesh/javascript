const giveCSS = (url, callback) => {
    let style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = url;
    document.head.append(style);
    callback(person);
};

let person = prompt("Enter your name?");
function greeting(person) {
    alert(`Hello ${person}!`);
}

giveCSS("style.css", greeting);
