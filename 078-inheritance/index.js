class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    detail() {
        alert(`${this.name} is an animal!`);
    }
    sleep() {
        alert(`${this.name} is sleeping!`);
    }
}

let elephantProps = new Animal("Elephant", "gray");
elephantProps.detail();
elephantProps.sleep();

class Monkey extends Animal {
    eatBanana() {
        alert(`${this.name} with ${this.color} color is eating bananas!`);
    }
}
let monkeyProps = new Monkey("Brave", "red");
monkeyProps.eatBanana();
// elephantProps.eatBanana();
