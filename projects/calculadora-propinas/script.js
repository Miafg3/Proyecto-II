const form = document.getElementById("tip-form");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const peopleInput = document.getElementById("people");
const result = document.getElementById("result");
const amountPerPerson = document.getElementById("amount-per-person");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const bill = Number(billInput.value);
    const tip = Number(tipInput.value);
    const people = Number(peopleInput.value);
    const total = bill * (tip / 100 + 1);
    const amount = total / people;

    amountPerPerson.textContent = `$${amount.toFixed(2)}`;

    result.classList.remove("hidden");
});