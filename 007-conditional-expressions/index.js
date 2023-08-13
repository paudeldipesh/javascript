let age = prompt("What is your age?");
age = Number(age);

if (age <= 0) {
    alert("Please enter a valid age.");
} else if (age < 18) {
    alert("You are not allowed because your age is below 18.");
} else if (age < 70) {
    alert("You are welcome to do as you please.");
} else if (age < 85) {
    alert("You are not allowed because your age is above 70.");
} else {
    alert("You are not a good fit for this program.");
}

let marks = prompt("Please enter your marks for this subject.");
marks = Number(marks);
alert(`You're ${marks >= 40 ? "Pass" : "Fail"}.`);
