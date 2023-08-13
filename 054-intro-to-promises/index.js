let promise = new Promise((resolve, reject) => {
    alert("Alert In Promise.");
});
console.log(promise);

console.log("Hello One!");
setTimeout(() => {
    console.log("This will execute in 2 seconds.");
}, 2000);
console.log("Hello Two!");
