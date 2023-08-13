let runAgain = true;

const canDrive = (age) => {
    return age >= 18;
};

while (runAgain) {
    let age = prompt("Enter your age:");
    age = Number(age);

    if (age < 0) {
        console.error(`The age is negative and it is ${age}`);
        break;
    }

    if (canDrive(age)) {
        alert("Yes, you can drive.");
    } else {
        alert("No, you cannot drive.");
    }

    runAgain = confirm("Do you want to check again?");
}

let number = prompt("Enter a number:");
number = Number(number);

if (number === 7) {
    window.location.href = "https://www.google.com";
}

document.body.style.backgroundColor = prompt("Enter the background color:");
