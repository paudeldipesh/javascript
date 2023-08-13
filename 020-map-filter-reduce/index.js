let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let mapArr = arr.map((item) => Math.pow(item, 2));
console.log(mapArr);

let filterArr = arr.filter((item) => item > 6);
console.log(filterArr);

let reduceArr = arr.reduce((itemOne, itemTwo) => itemOne + itemTwo);
console.log(reduceArr);
