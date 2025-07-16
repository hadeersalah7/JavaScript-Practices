const btn = document.querySelector("#calculate")
const bill = document.querySelector("#bill")
const tip = document.querySelector("#tip")
const total = document.querySelector("#total")

function calculateTotal() {
    const billValue = bill.value
    const tipValue = tip.value
    const totalValue = billValue * (1 + tipValue / 100);
    total.innerHTML = totalValue.toFixed(2)
}

btn.addEventListener("click", calculateTotal)