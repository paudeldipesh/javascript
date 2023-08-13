class Employee {
    constructor(person) {
        this.person = person;
    }
    requestLeaves(noOfDays) {
        console.log(
            `${this.person} - Employee has requested ${noOfDays} ${
                noOfDays > 1 ? "days" : "day"
            } leave!`
        );
    }
}

let employeeOne = new Employee("Suresh");
employeeOne.requestLeaves(5);

class Programmer extends Employee {
    constructor(person) {
        super(person);
    }
    requestLeaves(noOfDays) {
        console.log(
            `${this.person} - Employee has requested ${noOfDays}, but got ${noOfDays + 1} ${
                noOfDays + 1 > 1 ? "days" : "day"
            } leave (One Extra Given)!`
        );
    }
}

let programmerOne = new Programmer("Dipesh");
programmerOne.requestLeaves(7);
