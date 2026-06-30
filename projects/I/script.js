function generateBandName() {
    const city = document.getElementById('city').value.trim();
    const pet = document.getElementById('pet').value.trim();
    const resultDiv = document.getElementById('result');
    const bandNameH2 = document.getElementById('band-name');

    if (city && pet) {
        bandNameH2.innerText = `${city} ${pet}`;
        resultDiv.style.display = 'block';
    } else {
        alert('Por favor, llena ambos campos.');
    }
}
