let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let reglas = document.querySelector(".subcontenedor3");

boton1.addEventListener("click", () => {
  reglas.style.display = "block";
});

boton2.addEventListener("click", () => {
  reglas.style.display = "none";
});

let subboton1 = document.querySelector("#subboton1");
let subboton2 = document.getElementById("subboton2");
let regla = document.querySelector("#caja-reglas");

subboton1.addEventListener("click", function () {
  regla.style.left = "660px";
});

subboton2.addEventListener("click", function() {
  regla.style.left = "-2000px";
});


let papel = document.querySelector("#papel")
let piedra= document.querySelector("#piedra")
let tijera = document.querySelector("#tijera")
let contenedorpadre = document.querySelector("#contenedorsubpadre")

papel.addEventListener("click", function(){
contenedorpadre.style.left="0";
})

piedra.addEventListener("click", function(){
  contenedorpadre.style.left="0";
})

tijera.addEventListener("click", function(){
  contenedorpadre.style.left="0";
})

let jugar = document.querySelector(".jugar")

jugar.addEventListener("click", function(){
  contenedorpadre.style.left="-2000px";
})

let resultado = document.querySelector(".ganador")


function opcion(_humano) {
  let pc = papel[opcion];
  console.log("La maquina eligio" +pc)
  return opcion[Math.floor(Math.random() * opcion.length)];
}

if(_humano != pc){
  if(_humano == papel && pc == tijera)
  alert("winner the pc")
}else if(_humano == piedra && pc === papel){
  alert("Winner")
}else if(_humano== tijera && pc === piedra){
  alert("winner the pc")
}

if(_escogio == tijera && pc == tijera == tijera){
  alert("Tie")
}else if(_escogio == tijera && pc == tijera == papel){
  alert("Winner")
}else if(_escogio == tijera && pc == tijera == piedra){
  alert("Loser")
}

if(_escogio == piedra  && pc == tijera == tijera){
  alert("Winner")
}else if(_escogio == piedra  && pc == tijera == papel){
  alert("Loser")
}else if(_escogio == piedra  && pc == tijera == piedra){
  alert("Tie")
}