var opciones = [0, 1, 2];
var eleccionMaquina;

function aleatorio(minimo, maximo) {
  var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
  return numero;
}

function usuario(eleccionUsuario) {
  eleccionUsuario = parseInt(eleccionUsuario);
  eleccionMaquina = aleatorio(0, 2);

  var imgpapel = document.createElement("img");
  imgpapel.src = "images/icon-paper.svg";

  var imgroca = document.createElement("img");
  imgroca.src = "images/icon-rock.svg";

  var imgtijera = document.createElement("img");
  imgtijera.src = "images/icon-scissors.svg";

  if (eleccionUsuario == 0) {
    if (opciones[eleccionMaquina] == 1) {
      document.getElementById("efecto").innerHTML =
        "<h1>¡Perdiste!</h1> <h3>La maquina eligio papel y tu piedra.</h3>";
      document.body.appendChild(imgpapel);
    } else {
      if (opciones[eleccionMaquina] == 2) {
        document.getElementById("efecto").innerHTML =
          "<h1>¡Ganaste!</h1> <h3>La maquina eligio tijera y tu piedra.</h3>";
        document.body.appendChild(imgtijera);
      } else {
        if (opciones[eleccionMaquina] == 0) {
          document.getElementById("efecto").innerHTML =
            "<h1>¡Empate!</h1> <h3>Ambos eligieron piedra.</h3>";
          document.body.appendChild(imgroca);

        }
      }
    }
  }

  if (eleccionUsuario == 1) {
    if (opciones[eleccionMaquina] == 2) {
      document.getElementById("efecto").innerHTML =
        "<h1>¡Perdiste!</h1> <h3>La maquina eligio tijera y tu papel.</h3>";
    } else {
      if (opciones[eleccionMaquina] == 0) {
        document.getElementById("efecto").innerHTML =
          "<h1>¡Ganaste!</h1> <h3>La maquina eligio piedra y tu papel.</h3>";
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
    } else {
      if (opciones[eleccionMaquina] == 0) {
        document.getElementById("efecto").innerHTML =
          "<h1>¡Perdiste!</h1> <h3>La maquina eligio piedra y tu tijera.</h3>";
      } else {
        if (opciones[eleccionMaquina] == 2) {
          document.getElementById("efecto").innerHTML =
            "<h1>¡Empate!</h1> <h3>Ambos eligieron tijera.</h3>";
        }
      }
    }
  }

  document.getElementById("efecto").style.display = "";
}

function quitarEfecto() {
  document.getElementById("efecto").style.display = "none";
}

function piedra() {}
