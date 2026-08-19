const form = document.getElementById("password-form");

const lettersInput = document.getElementById("letters");
const symbolsInput = document.getElementById("symbols");
const numbersInput = document.getElementById("numbers");

const result = document.getElementById("result");
const generatedPassword = document.getElementById("password");

const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "!#$%&()*+";
const numbers = "0123456789";

function getRandomCharacter(characters) {
    const index = Math.floor(Math.random() * characters.length);
    return characters[index];
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }

    return array;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const numLetters = Number(lettersInput.value);
    const numSymbols = Number(symbolsInput.value);
    const numNumbers = Number(numbersInput.value);

    const password = [];

    for (let i = 0; i < numLetters; i++) {
        password.push(getRandomCharacter(letters));
    }

    for (let i = 0; i < numSymbols; i++) {
        password.push(getRandomCharacter(symbols));
    }

    for (let i = 0; i < numNumbers; i++) {
        password.push(getRandomCharacter(numbers));
    }

    shuffle(password);

    generatedPassword.textContent = password.join("");

    result.classList.remove("hidden");
});
