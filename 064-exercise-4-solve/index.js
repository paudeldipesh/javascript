setInterval(() => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("clock").innerHTML = timeString;
}, 1000);
