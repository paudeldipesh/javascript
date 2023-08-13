let isRun = confirm("Do you want to run setTimeout?");
let timer;
if (isRun) {
    timer = setTimeout(
        (a, b) => {
            alert(`Hello, World! ${a + b}`);
        },
        1000,
        3,
        4
    );
} else {
    clearTimeout(timer);
}

let isInterval = confirm("Do you want to run setInterval?");
let interval;
if (isInterval) {
    interval = setInterval(
        (a, b) => {
            alert(`Hello, World! ${a - b}`);
        },
        3000,
        5,
        5
    );
} else {
    clearInterval(interval);
}
