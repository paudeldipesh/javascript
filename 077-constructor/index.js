class railwayForm {
    constructor(name, train, route) {
        this.person = name;
        this.train = train;
        this.route = route;
        console.log("Constructor Called!");
    }
    preview() {
        alert(`${this.person} got the form for Train No. ${this.train} to ${this.route}!`);
    }
    submit() {
        alert(`${this.person}'s form Submitted for Train No. ${this.train} to ${this.route}!`);
    }
    cancel() {
        alert(`${this.person}'s form Cancelled for Train No. ${this.train} to ${this.route}!`);
    }
}

let dipeshForm = new railwayForm("Dipesh", 69, "Bardiya");
dipeshForm.preview();
dipeshForm.submit();
dipeshForm.cancel();
