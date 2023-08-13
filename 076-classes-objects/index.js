class railwayForm {
    fill(name, train) {
        this.person = name;
        this.train = train;
    }
    submit() {
        alert(`${this.person}'s form Submitted for Train No. ${this.train}!`);
    }
    cancel() {
        alert(`${this.person}'s form Cancelled for Train No. ${this.train}!`);
    }
    reject() {
        alert(`${this.person}'s form Rejected for Train No. ${this.train}!`);
    }
}

let dipeshForm = new railwayForm();
dipeshForm.fill("Dipesh", 69);
dipeshForm.submit();
dipeshForm.reject();

let ramForm = new railwayForm();
ramForm.fill("Ram", 96);
ramForm.cancel();
ramForm.reject();

let sureshForm = new railwayForm();
sureshForm.fill("Suresh", 100);
sureshForm.reject();
