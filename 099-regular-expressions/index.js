const regexOne = /Dipesh/g;
const textOne = "Dipesh is man. Dipesh is a developer. Dipesh is the best.";
console.log(textOne.replace(regexOne, "Mahadev"));

const regexTwo = /.audel/g;
const textTwo = "Paudel is better than Gaudel.";
console.log(textTwo.replace(regexTwo, "Dipesh"));

const regexThree = /\d[a-f]dipesh/g;
const textThree = "hello my name is 7ddipesh how can i help you 0fdipesh.";
console.log(textThree.replace(regexThree, "Dipesh"));

const regexFour = /^He/gm;
const textFour = "He is best. He can do it.\nHe will be there.";
console.log(textFour.replace(regexFour, "Dipesh"));

const regexFive = /(abc*)/g;
const textFive = "abcabc is abc abc.";
console.log(textFive.replace(regexFive, "Dipesh"));

const regexSix = /(abc){2}/gi;
const textSix = "abcABc is abc abc.";
console.log(textSix.replace(regexSix, "Dipesh"));

// Learn regexr: https://regexr.com/
