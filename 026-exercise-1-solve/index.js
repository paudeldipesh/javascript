const randomNumber = Math.floor(Math.random() * 100 + 1);
alert(`The random number is ${randomNumber}.`);
let guess;
let score = 100;

do {
    guess = Number(prompt("Please enter a number from 1 to 100."));
    if (guess < randomNumber) {
        alert("Guess is low.");
    } else if (guess > randomNumber) {
        alert("Guess is high.");
    } else {
        alert(`Your guess is correct! You scored ${score} points.`);
    }
    score--;
} while (guess !== randomNumber);
