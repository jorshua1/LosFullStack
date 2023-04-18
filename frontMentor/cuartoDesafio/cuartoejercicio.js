let boton1 = document.getElementById("boton1");
let btuno = document.getElementById("btuno")
let btdos = document.getElementById("btdos")
let bttres = document.getElementById("bttres")
let btcuatro = document.getElementById("btcuatro")
let btcinco = document.getElementById("btcinco")
let resultado1 = document.querySelector("#precio1")
let resultado2 = document.querySelector("#precio2")
let Custom = document.getElementById("Custom")

let procedimiento = (porcentaje) => {
    let text1 = Number(document.getElementById("text1").value);
    let text2 = Number(document.getElementById("text2").value);

    if(isNaN(text1)&&isNaN(text2)){
        let persona= text1/text2;
    let calculoTip=persona*porcentaje;
    resultado2.value = '$'+persona.toFixed(2);
    resultado1.value = '$'+calculoTip.toFixed(2);
    }else{
        let text2 = document.getElementById("text2");
        text2.value= "falta este campo";
    }
}

function limpiar(){
    let text1 = document.getElementById("text1");
    let text2 = document.getElementById("text2");
    let resultado1 = document.querySelector("#precio1")
    let resultado2 = document.querySelector("#precio2")
    resultado1.value = "0.00";
    resultado2.value = "0.00";
    text1.value = "";
    text2.value= "";
}
boton1.addEventListener('click',limpiar);

btuno.addEventListener("click", function (){
    procedimiento (0.05);
})

btdos.addEventListener("click", function(){ procedimiento (0.1);});
bttres.addEventListener("click", function(){ procedimiento (0.15);});
btcuatro.addEventListener("click", function(){ procedimiento (0.25);});
btcinco.addEventListener("click", function(){  procedimiento (0.5);}); 

Custom.addEventListener("keydown", function (){
if(event.keyCode===13){
    let Custom2=Number(document.querySelector("#Custom").value)
        Custom2 = Custom2*0.01;
        procedimiento (Custom2); 
    }
})