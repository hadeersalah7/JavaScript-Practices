const hours = document.querySelector('.hour');
const minutes = document.querySelector('.minute');
const seconds = document.querySelector('.second');

const updateClock = () => {
    const now = new Date();

    const getSeconds = now.getSeconds();
    const getMinutes = now.getMinutes();
    const getHours = now.getHours();

    const secondDegree = (getSeconds / 60) * 360;
    const minuteDegree = (getMinutes / 60) * 360;
    const hoursDegree = (getHours / 12) * 360

    seconds.style.transform = `rotate(${secondDegree}deg)`;
    minutes.style.transform = `rotate(${minuteDegree}deg)`;
    hours.style.transform = `rotate(${hoursDegree}deg)`
}

setInterval(updateClock, 1000);