//botones
let piedra = document.querySelector("#piedra");
let papel = document.querySelector("#papel");
let tijera = document.querySelector("#tijera");
let juego = document.querySelector("#juego");

//imrpexion
let resultado = document.querySelector("#resultado");
let puntaje_jugador = document.querySelector("#puntaje-jugador");
let puntaje_maquina = document.querySelector("#puntaje-maquina");
puntaje_jugador.innerHTML = "0";
puntaje_maquina.innerHTML = "0";
let cont = 0;

piedra.addEventListener("click", function () {
    alert("piedra");
})
papel.addEventListener("click", function () {
    alert("papel");
})
tijera.addEventListener("click", function () {
    alert("tijera");
})

juego.addEventListener("click", function () {
    
})