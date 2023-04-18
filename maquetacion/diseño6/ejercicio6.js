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
    let piedra="piedra";
    three(piedra)
})
papel.addEventListener("click", function () {
    let papel="papel";
    three(papel)
})
tijera.addEventListener("click", function () {
    let tijera="tijera";
    three(tijera)
})

juego.addEventListener("click", function () {

})

function three(x) {
    if (x === "piedra") {
        let saca;
        let random = Math.floor(Math.random()*3)+1;
        if(random==1){
            saca=="piedra";
        }else if(random==2){
            saca=="papel";
        }else{
            saca=="tijera";
        }
        
        if(saca==x){
            alert("empate")
        }else if(saca!=x){
            
        }

    } else if (x === "papel") {
        let random = Math.floor(Math.random()*2)+1;
        if(random==1){

        }else{
            
        }
    } else if (x === "tijera") {
        let random = Math.floor(Math.random()*2)+1;
        if(random==1){

        }else{
            
        }
    }
}