const timer = document.querySelector("#timer")
const start = document.querySelector("#start")
const reset = document.querySelector("#reset")
const stop = document.querySelector("#stop")

let startTime = 0;
let elapsedTime = 0;
let interval

const startTimer = () => {
    startTime = Date.now() - elapsedTime
    interval = setInterval(() => {
        elapsedTime = Date.now() - startTime
        timer.textContent = formattedTime(elapsedTime)
    }, 10)
    start.disabled = true;
    stop.disabled = false
}

const formattedTime  = (time) => {
    const milliseconds = Math.floor((time % 1000) / 10)
    const seconds = Math.floor((time % (1000 * 60)) / 1000)
    const minutes = Math.floor(((time) % (1000 * 60 * 60)) / (1000 * 60))
    const hours = Math.floor(time / (1000 * 60 * 60))
    return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + "." + 
        (milliseconds > 9 ? milliseconds : "0" + milliseconds)
    )  
    
}

const stopTimer = () => {
    clearInterval(interval)
    start.disabled = false;
    stop.disabled = true
};  

const resetTimer = () => {
    clearInterval(interval)
    elapsedTime = 0;
    timer.textContent = "00.00.00"

    stop.disabled = true;
    start.disabled = false
}

start.addEventListener("click", startTimer)
stop.addEventListener("click", stopTimer)
reset.addEventListener("click", resetTimer)