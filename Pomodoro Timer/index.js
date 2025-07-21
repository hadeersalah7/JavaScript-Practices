const timer = document.querySelector("#timer");
const start = document.querySelector("#start");
const reset = document.querySelector("#reset");
const stop = document.querySelector("#stop");

let interval;
let timeLeft = 1500;

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    let formatedDate = `${minutes.toString().padStart(2, "0")}: ${seconds
        .toString()
        .padStart(2, "0")}`;
    timer.innerHTML = formatedDate;
}

function startTimer() {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft === 0) {
            alert("Time's Up!")
            timeLeft = 1500
            updateTimer()
        }
    }, 1000)
}

function stopTimer() {
    clearInterval(interval)
}

function resetTimer() {
    clearInterval()
    timer = 1500;
    updateTimer()
}

start.addEventListener("click", startTimer)
stop.addEventListener("click", stopTimer)
reset.addEventListener("click", resetTimer)