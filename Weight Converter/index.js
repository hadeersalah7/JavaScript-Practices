const input = document.querySelector("#input")
const result = document.querySelector("#result")
const error = document.querySelector("#error")

let errorTime;
let resultTime;

const updateWeight = () => {
    if (input.value <= 0 || isNaN(input.value)) {
        error.innerHTML = "Please enter a valid number!"
        clearTimeout(error)
        errorTime = setTimeout(() => {
            error.innerHTML = ""
            input.value = ""
        },2000)
    } else {
        const weightResult = (+input.value / 2.2).toFixed(2)
        result.innerHTML = weightResult
        clearTimeout(resultTime)
        resultTime = setTimeout(() => {
            input.value = ""
            result.innerHTML = ""
        }, 5000)
    }
}

input.addEventListener("input", updateWeight)