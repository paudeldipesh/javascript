class Password {
    constructor() {
        console.log("Welcome To Password Generator!");
        this.newPassword = "";
    }
    generatePassword(passwordLength) {
        let characters = "abcdefghijklmnopqrstuvwxyz";
        let numbers = "0123456789";
        let specials = "([^'`*]!@&#${;~-=+:}%?/|<,_.>)";

        if (passwordLength < 3) {
            console.log("your password should be 3 character long!");
        } else {
            let i = 0;
            while (i < passwordLength) {
                this.newPassword += characters[Math.floor(Math.random() * characters.length)];
                this.newPassword += numbers[Math.floor(Math.random() * numbers.length)];
                this.newPassword += specials[Math.floor(Math.random() * specials.length)];
                i += 3;
            }
            this.newPassword = this.newPassword.substring(0, passwordLength);
            return this.newPassword;
        }
    }
}
let updatePassword = new Password();
console.log(updatePassword.generatePassword(4));
