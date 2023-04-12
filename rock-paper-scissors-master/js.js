var opciones = [0, 1, 2];
var eleccionMaquina;

function aleatorio(minimo, maximo) {
  var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
  return numero;
}

let botScore = 0;
let yoScore = 0;

function usuario(eleccionUsuario) {
  eleccionUsuario = parseInt(eleccionUsuario);
  eleccionMaquina = aleatorio(0, 2);
  if (eleccionUsuario == 0) {
    if (opciones[eleccionMaquina] == 1) {
      document.getElementById("efecto").innerHTML =
        "<h1>¡Perdiste!</h1> <h3>La maquina eligio papel y tu piedra.</h3>";
      botScore++;
      document.getElementById("puntobot").value = botScore;
    } else {
      if (opciones[eleccionMaquina] == 2) {
        document.getElementById("efecto").innerHTML =
          "<h1>¡Ganaste!</h1> <h3>La maquina eligio tijera y tu piedra.</h3>";
        yoScore++;
        document.getElementById("puntoyo").value = yoScore;
      } else {
        if (opciones[eleccionMaquina] == 0) {
          document.getElementById("efecto").innerHTML =
            "<h1>¡Empate!</h1> <h3>Ambos eligieron piedra.</h3>";
        }
      }
    }
  }
  if (eleccionUsuario == 1) {
    if (opciones[eleccionMaquina] == 2) {
      document.getElementById("efecto").innerHTML =
        "<h1>¡Perdiste!</h1> <h3>La maquina eligio tijera y tu papel.</h3>";
      botScore++;
      document.getElementById("puntobot").value = botScore;
    } else {
      if (opciones[eleccionMaquina] == 0) {
        document.getElementById("efecto").innerHTML =
          "<h1>¡Ganaste!</h1> <h3>La maquina eligio piedra y tu papel.</h3>";
        yoScore++;
        document.getElementById("puntoyo").value = yoScore;
      } else {
        if (opciones[eleccionMaquina] == 1) {
          document.getElementById("efecto").innerHTML =
            "<h1>¡Empate!</h1> <h3>Ambos eligieron papel.</h3>";
        }
      }
    }
  }
  if (eleccionUsuario == 2) {
    if (opciones[eleccionMaquina] == 1) {
      document.getElementById("efecto").innerHTML =
        "<h1>¡Ganaste!</h1> <h3>La maquina eligio papel y tu tijera.</h3>";
      yoScore++;
      document.getElementById("puntoyo").value = yoScore;
    } else {
      if (opciones[eleccionMaquina] == 0) {
        document.getElementById("efecto").innerHTML =
          "<h1>¡Perdiste!</h1> <h3>La maquina eligio piedra y tu tijera.</h3>";
        botScore++;
        document.getElementById("puntobot").value = botScore;
      } else {
        if (opciones[eleccionMaquina] == 2) {
          document.getElementById("efecto").innerHTML =
            "<h1>¡Empate!</h1> <h3>Ambos eligieron tijera.</h3>";
        }
      }
    }
  }
  if(yoScore===3){
    alert("juego terminado ganas tu")
  }
  
  
  document.getElementById("efecto").style.display = "";
}



