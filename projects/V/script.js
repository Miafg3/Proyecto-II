const letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
];
const simbolos = ["!", "#", "$", "%", "&", "(", ")", "*", "+"];
const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function generarContrasena() {
  const numLetras = parseInt(document.getElementById("letras").value) || 0;
  const numSimbolos = parseInt(document.getElementById("simbolos").value) || 0;
  const numNumeros = parseInt(document.getElementById("numeros").value) || 0;

  let listaPassword = [];

  for (let i = 0; i < numLetras; i++) {
    const letraAzar = letras[Math.floor(Math.random() * letras.length)];
    listaPassword.push(letraAzar);
  }

  for (let i = 0; i < numSimbolos; i++) {
    const simboloAzar = simbolos[Math.floor(Math.random() * simbolos.length)];
    listaPassword.push(simboloAzar);
  }

  for (let i = 0; i < numNumeros; i++) {
    const numeroAzar = numeros[Math.floor(Math.random() * numeros.length)];
    listaPassword.push(numeroAzar);
  }

  if (listaPassword.length === 0) {
    alert("Por favor, ingresa una cantidad mayor a 0 en algún campo.");
    return;
  }

  for (let i = listaPassword.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [listaPassword[i], listaPassword[j]] = [listaPassword[j], listaPassword[i]];
  }

  const passwordFinal = listaPassword.join("");

  const pantalla = document.getElementById("pantalla-password");
  pantalla.innerText = passwordFinal;
  pantalla.classList.add("activa");

  const btnCopiar = document.getElementById("btn-copiar");
  btnCopiar.disabled = false;
  btnCopiar.innerText = "Copiar";
}

function copiarAlPortapapeles() {
  const texto = document.getElementById("pantalla-password").innerText;
  const btnCopiar = document.getElementById("btn-copiar");

  navigator.clipboard
    .writeText(texto)
    .then(() => {
      btnCopiar.innerText = "¡Copiado!";
    })
    .catch((err) => {
      console.error("Error al copiar texto: ", err);
    });
}