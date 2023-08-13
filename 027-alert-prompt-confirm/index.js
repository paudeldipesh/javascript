alert("I am checking my script.");

let a = prompt("Please enter a number.");
a = Number(a);
alert(`You've entered "${a}" of type "${typeof a}".`);

const confirmWrite = confirm("Do you want to write this to the page?");
if (confirmWrite) {
    document.write(a);
} else {
    document.write("You are not allowed to write.");
}

console.log(typeof prompt("What is your number?", 23));
