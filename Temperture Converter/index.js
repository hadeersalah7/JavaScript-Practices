const cel = document.querySelector("#celsuis");
const fer = document.querySelector("#fahrenheit");
const kel = document.querySelector("#kelvin");

function computeTemp(event) {
    const currentVal = +event.target.value;

    switch (event.target.name) {
        case "celsuis":
            kel.value = (currentVal + 273.32).toFixed(2);
            fer.value = (currentVal * 1.8 + 32).toFixed(2);
            break;
        case "fahrenheit":
            cel.value = ((currentVal - 32) / 1.8).toFixed(2);
            kel.value = (currentVal - 32 / 1.8 + 273.32).toFixed(2);
        case "kelvin":
            cel.value = (currentVal - 273.32).toFixed(2);
            fer.value = ((currentVal - 273.32) * 1.8 + 32).toFixed(2);
        default:
            break;
    }
}
