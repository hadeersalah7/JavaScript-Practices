const birthday = document.querySelector("#birthday");
const result = document.querySelector("#result");
const calculateBtn = document.querySelector("#btn");

const calculateAge = () => {
    birthdayValue = birthday.value;
    if (birthday === "") {
        alert("Please Enter A Birth Date")
    } else {
        const age = getAge(birthdayValue)
        result.innerText = `Your Age is ${age} ${age > 1 ? "Years" : "Year" } Old`
    }
}

const getAge = (birthDate) => {
    const currentDate = new Date();
    const birthdayDate = new Date(birthDate)

    const age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth()

    if (month < 0 || (month === 0 && currentDate.getDate < birthdayDate.getDate())) {
        age--
    }

    return age;
}

calculateBtn.addEventListener("click", calculateAge)