console.log("Eva's".length);

let random = "Dipesh is the best guy on the planet.";
console.log(random.includes("ramesh"));
console.log(random.includes("dipesh"));

const sentence = prompt("Could you please provide a sentence?");
const word = prompt("Please enter a word to check whether it is in the sentence or not.");
console.log(`The word "${word}" ${sentence.includes(word) ? "is" : "is not"} in the sentence.`);

let person = "Rajesh Sharma";
console.log(person.toUpperCase());

let money = "Give me Rs.100";
console.log(money.length);
console.log(money.slice(11));
console.log(typeof money.slice(11));
console.log(typeof Number(money.slice(11)));
