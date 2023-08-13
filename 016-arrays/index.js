const arrayConstructor = new Array(9, 8, 7, 6);
console.log(arrayConstructor);

let marks = [23, 34, 67, 34, 89];
console.log(marks);
console.log(typeof marks);
console.log(marks.length);
console.log(marks[2]);

marks[0] = 7;
console.log(marks);

for (let value of marks) {
    console.log(value);
}

const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

const forEachArray = ["ram", "krishna", "bishnu", "shiva"];
forEachArray.forEach((nam) => console.log(nam));

let immutableArray = [1, 2, 3, 4];
Object.freeze(immutableArray);
immutableArray[1] = 10;
console.log(immutableArray);
