// Captura de elementos DOM
const textoHistoria = document.getElementById("texto-historia");
const contenedorOpciones = document.getElementById("contenedor-opciones");
const pantallaJuego = document.getElementById("pantalla-juego");

// Cambia texto aplicando animación CSS
function cambiarTexto(nuevoTexto) {
  textoHistoria.classList.remove("aparecer-texto");
  void textoHistoria.offsetWidth;
  textoHistoria.innerHTML = nuevoTexto;
  textoHistoria.classList.add("aparecer-texto");
}

function tomarDecision(opcion) {
  // Nivel 1:
  if (opcion === "izquierda") {
    cambiarTexto(
      "Llegaste a un lago enorme y profundo. ¿Qué prefieres hacer? ¿Esperar un barco o cruzar nadando?",
    );

    contenedorOpciones.innerHTML = `
      <button class="btn-juego" onclick="tomarDecision('esperar')">Esperar barco</button>
      <button class="btn-juego" onclick="tomarDecision('nadar')">Cruzar nadando</button>
    `;
  } else if (opcion === "derecha") {
    finalizarJuego(
      "¡Caíste en un agujero profundo!<br>☠️ FIN DEL JUEGO ☠️",
      false,
    );
  }

  // Nivel 2:
  else if (opcion === "esperar") {
    cambiarTexto(
      "El barco te llevó a la isla a salvo. Ahí encuentras una misteriosa cabaña con 3 puertas: Roja, Amarilla y Azul. ¿Cuál abres?",
    );

    contenedorOpciones.innerHTML = `
      <button class="btn-juego btn-rojo" onclick="tomarDecision('roja')">Puerta Roja</button>
      <button class="btn-juego btn-amarillo" onclick="tomarDecision('amarilla')">Puerta Amarilla</button>
      <button class="btn-juego btn-azul" onclick="tomarDecision('azul')">Puerta Azul</button>
    `;
  } else if (opcion === "nadar") {
    finalizarJuego(
      "¡Fuiste atacado por una trucha gigante mientras nadabas! ☠️ FIN DEL JUEGO ☠️",
      false,
    );
  }

  // Nivel 3:
  else if (opcion === "roja") {
    finalizarJuego(
      "¡Entraste a una habitación envuelta en llamas! 🔥 FIN DEL JUEGO 🔥",
      false,
    );
  } else if (opcion === "amarilla") {
    finalizarJuego(
      "¡Encontraste el cofre dorado! ¡Felicidades, ganaste el tesoro! 🏆🪙",
      true,
    );
  } else if (opcion === "azul") {
    finalizarJuego(
      "¡La habitación estaba repleta de cocodrilos hambrientos! 🐊 FIN DEL JUEGO 🐊",
      false,
    );
  }
}

// Cambia el diseño visual de la tarjeta según ganes o pierdas

function finalizarJuego(mensaje, jugadorGano) {
  cambiarTexto(mensaje);

  if (jugadorGano) {
    pantallaJuego.classList.add("pantalla-victoria");
    textoHistoria.style.color = "var(--color-oro)";
  } else {
    pantallaJuego.classList.add("pantalla-sacudida");
    textoHistoria.style.color = "var(--color-error)";
  }

  contenedorOpciones.innerHTML = `
    <button class="btn-juego btn-reiniciar" onclick="reiniciarJuego()">Intentar de nuevo ↻</button>
  `;
}

// Resetea clases y estilos al estado inicial

function reiniciarJuego() {
  pantallaJuego.classList.remove("pantalla-sacudida", "pantalla-victoria");
  textoHistoria.style.color = "var(--color-texto)";

  cambiarTexto("Estás en un cruce de caminos. ¿Hacia dónde quieres ir?");

  contenedorOpciones.innerHTML = `
    <button class="btn-juego" onclick="tomarDecision('izquierda')">Izquierda ➔</button>
    <button class="btn-juego" onclick="tomarDecision('derecha')">Derecha ➔</button>
  `;
}
