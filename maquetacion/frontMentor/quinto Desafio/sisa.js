const scoreUsuario = document.querySelector('.puntuacion');
const scoreBot = document.querySelector(".score:last-child .puntuacion");
const valorRonda = document.querySelector('.valorronda');
const imagenUsuario = document.querySelector(".eleccion.usuario img");
const imagenBot = document.querySelector(".eleccion.bot img");
const textoResultado = document.querySelector('.texto-resultante');
const botones = document.querySelectorAll(".button");
const botonPlayAgain = document.querySelector(".play-again-button");

let numeroDeRondas;

// Convertir el NodeList de botones en un array y usar forEach en lugar de un for loop
Array.from(botones).forEach((boton, i) => {
  boton.addEventListener("click", function() {
    cambiarNumeroDeRondas(i);
  });
});

function cambiarNumeroDeRondas(i) {
  switch (i) {
    case 0:
      // Si se pulsa el botón BEST OF 3
      numeroDeRondas = 3;
      break;
    case 1:
      // Si se pulsa el botón BEST OF 5
      numeroDeRondas = 5;
      break;
    case 2:
      // Si se pulsa el botón BEST OF 10
      numeroDeRondas = 10;
      break;
    default:
      break;
  }
}

function usuario(eleccionUsuario) {
  eleccionUsuario = parseInt(eleccionUsuario);

  const eleccionesPosibles = ['rock', 'paper', 'scissors'];
  const eleccionBot = Math.floor(Math.random() * eleccionesPosibles.length);

  imagenUsuario.src = `images/icon-${eleccionesPosibles[eleccionUsuario]}.svg`;
  imagenBot.src = `images/icon-${eleccionesPosibles[eleccionBot]}.svg`;

  if (eleccionUsuario === eleccionBot) {
    // Empate
    textoResultado.textContent = 'TIE';
  } else if (eleccionUsuario === 0 && eleccionBot === 2 ||
             eleccionUsuario === 1 && eleccionBot === 0 ||
             eleccionUsuario === 2 && eleccionBot === 1) {
    // Usuario gana
    textoResultado.textContent = 'YOU WIN';
    scoreUsuario.textContent = parseInt(scoreUsuario.textContent) + 1;
  } else {
    // Bot gana
    textoResultado.textContent = 'YOU LOSE';
    scoreBot.textContent = parseInt(scoreBot.textContent) + 1;
  }

  valorRonda.textContent = parseInt(valorRonda.textContent) + 1;

  if (parseInt(scoreUsuario.textContent) === numeroDeRondas ||
      parseInt(scoreBot.textContent) === numeroDeRondas) {
    // El juego ha terminado
    botonPlayAgain.style.display = "block";
    deshabilitarBotones();
  }
}

function deshabilitarBotones() {
  Array.from(botones).forEach(boton => {
    boton.disabled = true;
  });
}

function reiniciarJuego() {
  scoreUsuario.textContent = "0";
  scoreBot.textContent = "0";
  valorRonda.textContent = "1";
  imagenUsuario.src = "";
  imagenBot.src = "";
  textoResultado.textContent = "";

  Array.from(botones).forEach(boton => {
    boton.disabled = false;
  });

  botonPlayAgain.style.display = "none";
}
