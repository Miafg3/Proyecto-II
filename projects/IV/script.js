const rock = `
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
`;

const paper = `
     _______
---'    ____)____
           ______)
          _______)
         _______)
---.__________)
`;

const scissors = `
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
`;

const options = [rock, paper, scissors];

function jugar(userChoice) {
  const computerChoice = Math.floor(Math.random() * 3);

  const resultDiv = document.getElementById("result");
  const resultadoTexto = document.getElementById("resultado-texto");
  const userAscii = document.getElementById("user-ascii");
  const computerAscii = document.getElementById("computer-ascii");

  userAscii.textContent = options[userChoice];
  computerAscii.textContent = options[computerChoice];

  resultadoTexto.className = "";

  if (computerChoice === userChoice) {
    resultadoTexto.textContent = "¡Es un empate!";
    resultadoTexto.classList.add("empate");
  } else if (
    (computerChoice === 0 && userChoice === 2) ||
    (computerChoice === 1 && userChoice === 0) ||
    (computerChoice === 2 && userChoice === 1)
  ) {
    resultadoTexto.textContent = "¡La PC gana!";
    resultadoTexto.classList.add("perdiste");
  } else {
    resultadoTexto.textContent = "¡Tú ganas!";
    resultadoTexto.classList.add("ganaste");
  }

  resultDiv.style.display = "block";
}