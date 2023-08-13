try {
    let age = prompt("Enter your age?");
    age = Number(age);
    if (age > 120) {
        throw new Error("Invalid Age!");
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
