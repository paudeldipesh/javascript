let hackingTools = [
    "Initializing Hack Program...",
    "Connecting to Server 1",
    "Connection failed. Retrying...",
    "Hacking Ramesh username...",
    "Username found ramesh7...",
    "Connecting to Server 2",
    "Connecting to Facebook...",
    "Match Found.",
    "Hacking Successful!!!",
];

const timer = (timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, timeout * 1000);
    });
};

const showHack = async (message) => {
    await timer(3);
    const containerEl = document.getElementById("container");
    containerEl.innerHTML += `<h1>${message}</h1>`;
};

(async () => {
    for (let i = 0; i < hackingTools.length; i++) {
        await showHack(hackingTools[i]);
    }
})(); // Immediately Invoked Function Expression (IIFE).
