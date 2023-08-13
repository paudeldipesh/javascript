class Dairy {
    constructor(dairyProduct) {
        this.product = dairyProduct;
    }
    cheese() {
        alert(`I am a ${this.product} product!`);
    }
    get product() {
        return this._product;
    }
    set product(newProduct) {
        this._product = newProduct;
    }
}

class Butter extends Dairy {
    madeFromIceCream() {
        alert("Butter is made from ice cream!");
    }
}

let dairyOne = new Dairy("milk");
dairyOne.cheese();

console.log(dairyOne.product);

dairyOne.product = "curd";
dairyOne.cheese();

console.log(dairyOne instanceof Dairy);

let dairyThree = new Butter();
console.log(dairyThree instanceof Butter);

let dairyTwo = "yogurt";
console.log(dairyTwo instanceof Dairy);
