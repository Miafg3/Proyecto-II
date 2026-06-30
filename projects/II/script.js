function calculateTip() {
    const bill = parseFloat(document.getElementById('bill').value);
    const tip = parseInt(document.getElementById('tip').value);
    const people = parseInt(document.getElementById('people').value);
    const resultDiv = document.getElementById('result');
    const totalH2 = document.getElementById('total-per-person');

    if (isNaN(bill) || bill <= 0 || isNaN(people) || people <= 0) {
        alert('Por favor, ingresa montos y números de personas válidos.');
        return;
    }

    const total = (bill * (tip / 100 + 1)) / people;
    totalH2.innerText = `$${total.toFixed(2)}`;
    resultDiv.style.display = 'block';
}
