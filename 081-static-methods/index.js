class Fruit {
    constructor(fruitName) {
        this.name = Fruit.makeCapitalize(fruitName);
    }
    tasty() {
        alert(`"${this.name}" is tasty!`);
    }
    static makeCapitalize(name) {
        return `${name.charAt(0).toUpperCase()}${name.substring(1, name.length)}`;
    }
}

let fruitOne = new Fruit("mango");
fruitOne.tasty();
