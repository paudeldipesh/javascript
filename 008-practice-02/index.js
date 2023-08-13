let age = prompt("What is your age?");
age = Number(age);

let result = age > 10 && age < 20 ? "you are between 10 and 20." : "you aren't between 10 and 20.";
alert(result);

let a = prompt("Enter a number between 0 to 9.");
a = Number(a);

switch (a) {
    case 3:
        alert(`Right: ${a}`);
        break;
    case 6:
        alert(`Right: ${a}`);
        break;
    case 9:
        alert(`Right: ${a}`);
        break;
    default:
        alert(`Wrong: ${a}`);
}

let num1 = prompt("Enter a number?");
num1 = Number(num1);

if (num1 % 2 === 0 && num1 % 3 === 0) {
    console.log("The number is divisible by 2 and 3.");
} else {
    console.log("The number is not divisible by 2 and 3.");
}

let num2 = prompt("Enter a number?");
num2 = Number(num2);

if (num2 % 2 === 0 || num2 % 3 === 0) {
    console.log("The number is divisible by 2 or 3.");
} else {
    console.log("The number is not divisible by 2 or 3.");
}

let umer = prompt("Enter your age?");
umer = Number(umer);
console.log(`You can${umer >= 18 ? " drive." : " not drive."} `);
