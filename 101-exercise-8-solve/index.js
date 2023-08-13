let rootEl = document.getElementById("root");
let alarmEl = document.getElementById("alarm");

function playAudio() {
    let audio = new Audio("roar.mp3");
    audio.play();
}

setInterval(() => {
    let date = new Date();
    rootEl.innerHTML = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}, 1000);

const setAlarm = (seconds) => {
    let currentTime = new Date().getTime();
    // console.log(currentTime);
    setTimeout(() => {
        playAudio();
    }, seconds * 1000);

    setInterval(() => {
        secondsLeft = currentTime + seconds * 1000 - new Date().getTime();
        if (secondsLeft > 0) {
            alarmEl.innerHTML = `Seconds left for alarm ringing: ${Math.floor(
                secondsLeft / 1000
            )}.`;
        }
    });
};

let seconds = prompt("After how many seconds do you want to set alarm?");
setAlarm(parseInt(seconds));
