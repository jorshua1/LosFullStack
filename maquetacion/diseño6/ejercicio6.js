//botones de juego
let piedra = document.querySelector("#piedra");
let papel = document.querySelector("#papel");
let tijera = document.querySelector("#tijera");
//boton de volver a jugar
let juego = document.querySelector("#juego");
let reglas= document.querySelector("#reglas")
let cerrar_reglas= document.querySelector("#cerrar-reglas")
//divs
let caja_jugador = document.querySelector("#caja-jugador");
let caja_maquina = document.querySelector("#caja-maquina");
let caja_resultado = document.querySelector("#caja-resultado");
//resultado
let result_piedra = document.querySelector("#result-piedra")
let result_papel = document.querySelector("#result-papel")
let result_tijera = document.querySelector("#result-tijera")
let result_piedra2 = document.querySelector("#result-piedra2")
let result_papel2 = document.querySelector("#result-papel2")
let result_tijera2 = document.querySelector("#result-tijera2")
let caja_opaco = document.querySelector("#caja-opaco")
//imrpexion
let resultado = document.querySelector("#resultado");
let puntaje_jugador = document.querySelector("#puntaje-jugador");
puntaje_jugador.innerHTML = 0;
let cont1 = 0;
let cont2 = 0;



piedra.addEventListener("click", function () {
    let piedra = "piedra";
    three(piedra)
})
papel.addEventListener("click", function () {
    let papel = "papel";
    three(papel)
})
tijera.addEventListener("click", function () {
    let tijera = "tijera";
    three(tijera)
})

reglas.addEventListener("click", function () {
    caja_opaco.style.left="0px";
})
cerrar_reglas.addEventListener("click", function () {
    caja_opaco.style.left="-2000px";
})

juego.addEventListener("click", function () {
    caja_resultado.style.left = "-2000px"
    result_piedra.style.width = "0px"
    result_piedra.style.height = "0px"
    result_piedra2.style.width = "0px"
    result_piedra2.style.height = "0px"
    result_papel.style.width = "0px"
    result_papel.style.height = "0px"
    result_papel2.style.width = "0px"
    result_piedra.style.height = "0px"
    result_tijera.style.width = "0px"
    result_tijera.style.height = "0px"
    result_tijera2.style.width = "0px"
    result_tijera2.style.height = "0px"
})

function three(x) {
    caja_resultado.style.left = "0px";

    let y = 2;
    let random = Math.floor(Math.random() * 3) + 1;
    if (x === "piedra") {
        caja_jugador.style.borderColor = "red";
        result_piedra.style.width = "100px"
        result_piedra.style.height = "100px"
        resultado.innerHTML = "EMPATE"
        if (random == y) {
            result_piedra2.style.width = "100px"
            result_piedra2.style.height = "100px"
            caja_maquina.style.borderColor = "red";
        } else if (random > y) {
            caja_maquina.style.borderColor = "blue";
            result_papel2.style.width = "100px"
            result_papel2.style.height = "100px"
            resultado.innerHTML = "PERDISTE"
            cont2++;
            contador(cont1, cont2);
        } else {
            caja_maquina.style.borderColor = "green";
            result_tijera2.style.width = "100px"
            result_tijera2.style.height = "100px"
            resultado.innerHTML = "GANASTE"
            cont1++;
            contador(cont1, cont2);
        }

    } else if (x === "papel") {
        caja_jugador.style.borderColor = "blue";
        result_papel.style.width = "100px"
        result_papel.style.height = "100px"
        if (random == y) {
            caja_maquina.style.borderColor = "blue";
            result_papel2.style.width = "100px"
            result_papel2.style.height = "100px"
            resultado.innerHTML = "EMPATE"
        } else if (random > y) {
            caja_maquina.style.borderColor = "green";
            result_tijera2.style.width = "100px"
            result_tijera2.style.height = "100px"
            resultado.innerHTML = "PERDISTE"
            cont2++;
            contador(cont1, cont2);
        } else {
            caja_maquina.style.borderColor = "red";
            result_piedra2.style.width = "100px"
            result_piedra2.style.height = "100px"
            resultado.innerHTML = "GANASTE"
            cont1++;
            contador(cont1, cont2);
        }
    } else if (x === "tijera") {
        caja_jugador.style.borderColor = "green";
        result_tijera.style.width = "100px"
        result_tijera.style.height = "100px"
        if (random == y) {
            caja_maquina.style.borderColor = "green";
            resultado.innerHTML = "EMPATE"
            result_tijera.style.width = "100px"
            result_tijera.style.height = "100px"
        } else if (random > y) {
            caja_maquina.style.borderColor = "red";
            resultado.innerHTML = "PERDISTE"
            result_piedra2.style.width = "100px"
            result_piedra2.style.height = "100px"
            cont2++;
            contador(cont1, cont2);
        } else {
            caja_maquina.style.borderColor = "blue";
            resultado.innerHTML = "GANASTE"
            result_papel2.style.width = "100px"
            result_papel2.style.height = "100px"
            cont1++;
            contador(cont1, cont2);
        }
    }
}

function contador(contador1, contador2) {
    puntaje_jugador.innerHTML = contador1;
}