const form = document.getElementById("band-form");
const cityInput = document.getElementById("city");
const petInput = document.getElementById("pet");
const result = document.getElementById("result");
const bandName = document.getElementById("band-name");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const city = cityInput.value.trim();
    const pet = petInput.value.trim();

    const name = `${city} ${pet}`;

    bandName.textContent = name;

    result.classList.remove("hidden");
});
