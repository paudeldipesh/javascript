const user = prompt("Enter Exactly S, W or G.");
const cpuIn = Math.floor(Math.random() * 3);
const cpu = ["S", "W", "G"][cpuIn];
console.log(cpu);

const match = (user, cpu) => {
    if (cpu === user) {
        return "NOBODY";
    } else if (cpu === "S" && user === "W") {
        return "CPU";
    } else if (cpu === "S" && user === "G") {
        return "USER";
    } else if (cpu === "W" && user === "S") {
        return "USER";
    } else if (cpu === "G" && user === "S") {
        return "CPU";
    } else if (cpu === "G" && user === "W") {
        return "USER";
    } else if (cpu === "W" && user === "G") {
        return "CPU";
    }
};

const result = match(user, cpu);

alert(`"${result}" won the game. (User was ${user} and CPU was ${cpu}).`);
