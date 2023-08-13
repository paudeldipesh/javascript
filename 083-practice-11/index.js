class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(num) {
        this.real = this.real + num.real;
        this.imaginary = this.imaginary + num.imaginary;
    }
    get real() {
        return this._real;
    }
    get imaginary() {
        return this._imaginary;
    }
    set real(newReal) {
        this._real = newReal;
    }
    set imaginary(newImaginary) {
        this._imaginary = newImaginary;
    }
}

let one = new Complex(2, 4);
console.log(one.real, one.imaginary);
one.real = 10;
one.imaginary = 10;
let two = new Complex(6, 2);
one.add(two);

console.log(`${one.real}+${one.imaginary}i`);

class Human {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    learn() {
        alert(`${this.name} ${this.surname} (Human) is learning Books!`);
    }
}

class Student extends Human {
    learn() {
        alert(`${this.name} ${this.surname} (Student) is learning Books!`);
    }
}

let humanOne = new Human("Dipesh", "Paudel");
humanOne.learn();

let studentOne = new Student("Suresh", "Sharma");
studentOne.learn();

console.log(studentOne instanceof Human);
