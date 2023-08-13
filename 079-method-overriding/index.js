class Employee {
    requestLeaves(noOfDays) {
        console.log(`Employee has requested ${noOfDays} ${noOfDays > 1 ? "days" : "day"} leave!`);
    }
}

let employeeOne = new Employee();
employeeOne.requestLeaves(5);

class Programmer extends Employee {
    requestCoffee(noOfCoffees) {
        console.log(
            `Employee has requested ${noOfCoffees} ${noOfCoffees > 1 ? "coffees" : "coffee"}!`
        );
    }
    requestLeaves(noOfDays) {
        console.log(
            `Employee has requested ${noOfDays}, but got ${noOfDays + 1} ${
                noOfDays + 1 > 1 ? "days" : "day"
            } leave (One Extra Given)!`
        );
    }
}

let programmerOne = new Programmer();
programmerOne.requestLeaves(7);

class Developer extends Programmer {
    requestCoffee() {
        super.requestCoffee(3);
    }
}

let developerOne = new Developer();
developerOne.requestCoffee(9);
