var opciones = [0, 1, 2];
var eleccionMaquina;

function aleatorio(minimo, maximo) {
  var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
  return numero;
}
let botScore = 0;
let yoScore = 0;
let rondas = 0;

let tres = () => {
  return (rondas = 3);
};

let cinco = () => {
  return (rondas = 5);
};

let diez = () => {
  return (rondas = 10);
};

let nuevo = () => {
  return(
  document.getElementById("puntoyo").value =0,
  document.getElementById("puntobot").value =0 ,
  document.getElementById("efecto").innerHTML ="",
  rondas=(0)),
  botScore = (0),
  yoScore = (0);
};

function usuario(eleccionUsuario) {
  if (rondas !== 0) {
    eleccionUsuario = parseInt(eleccionUsuario);
    eleccionMaquina = aleatorio(0, 2);
    if (eleccionUsuario == 0) {
      if (opciones[eleccionMaquina] == 1) {
        document.getElementById("efecto").innerHTML =
          "<h1>¡Perdiste!</h1> <h3>La maquina eligio papel y tu piedra.</h3>";
        botScore++;
        rondas--;
        document.getElementById("puntobot").value = botScore;
      } else {
        if (opciones[eleccionMaquina] == 2) {
          document.getElementById("efecto").innerHTML =
            "<h1>¡Ganaste!</h1> <h3>La maquina eligio tijera y tu piedra.</h3>";
          yoScore++;
          rondas--;
          document.getElementById("puntoyo").value = yoScore;
        } else {
          if (opciones[eleccionMaquina] == 0) {
            document.getElementById("efecto").innerHTML =
              "<h1>¡Empate!</h1> <h3>Ambos eligieron piedra.</h3>";
            rondas--;
          }
        }
      }
    }
    if (eleccionUsuario == 1) {
      if (opciones[eleccionMaquina] == 2) {
        document.getElementById("efecto").innerHTML =
          "<h1>¡Perdiste!</h1> <h3>La maquina eligio tijera y tu papel.</h3>";
        botScore++;
        rondas--;
        document.getElementById("puntobot").value = botScore;
      } else {
        if (opciones[eleccionMaquina] == 0) {
          document.getElementById("efecto").innerHTML =
            "<h1>¡Ganaste!</h1> <h3>La maquina eligio piedra y tu papel.</h3>";
          yoScore++;
          rondas--;
          document.getElementById("puntoyo").value = yoScore;
        } else {
          if (opciones[eleccionMaquina] == 1) {
            document.getElementById("efecto").innerHTML =
              "<h1>¡Empate!</h1> <h3>Ambos eligieron papel.</h3>";
            rondas--;
          }
        }
      }
    }
    if (eleccionUsuario == 2) {
      if (opciones[eleccionMaquina] == 1) {
        document.getElementById("efecto").innerHTML =
          "<h1>¡Ganaste!</h1> <h3>La maquina eligio papel y tu tijera.</h3>";
        rondas--;
        yoScore++;
        document.getElementById("puntoyo").value = yoScore;
      } else {
        if (opciones[eleccionMaquina] == 0) {
          document.getElementById("efecto").innerHTML =
            "<h1>¡Perdiste!</h1> <h3>La maquina eligio piedra y tu tijera.</h3>";
          rondas--;
          botScore++;
          document.getElementById("puntobot").value = botScore;
        } else {
          if (opciones[eleccionMaquina] == 2) {
            document.getElementById("efecto").innerHTML =
              "<h1>¡Empate!</h1> <h3>Ambos eligieron tijera.</h3>";
            rondas--;
          }
        }
      }
    }
    document.getElementById("efecto").style.display = "";
  } else {
    if (botScore > yoScore) {
      document.getElementById("efecto").innerHTML =
        "<h3>el juego ha terminado</h3> <h1>¡Perdiste!</h1> <h3>La maquina te ha ganado.</h3>";
    } else if (botScore === yoScore) {
      document.getElementById("efecto").innerHTML =
        "<h3>El juego ha terminado</h3><h1>¡Empate!</h1> <h3>Los dos son igual de buenos.</h3>";
    } else {
      document.getElementById("efecto").innerHTML =
        "<h3>El juego ha terminado</h3><h1>¡Ganaste!</h1> <h3>Le has ganado a la maquina.</h3>";
    }
  }
}
