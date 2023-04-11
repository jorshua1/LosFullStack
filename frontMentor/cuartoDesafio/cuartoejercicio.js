let boton1 = document.getElementById("boton1");
let btuno = document.getElementById("btuno")
let btdos = document.getElementById("btdos")
let bttres = document.getElementById("bttres")
let btcuatro = document.getElementById("btcuatro")
let btcinco = document.getElementById("btcinco")

let procedimiento = (porcentaje, valor) => {
    let calculoTip = (valor * porcentaje)/100;
    alert(
    `oprimio el boton de ${porcentaje}% para un valor de ${valor} la propina es de ${calculoTip}`
    );
}

function uno(){
    procedimiento(5, 100000);
}

function dos(){
    procedimiento(5, 100000);
}

function tres(){
    procedimiento(5, 100000);
}

function cuatro(){
    procedimiento(5, 100000);
}

function cinco(){
    procedimiento(5, 100000);
}


function prueba(){
    alert("boton")
}

boton1.addEventListener("click", procedimiento (5, 5000));
btuno.addEventListener("click", procedimiento (10, 10000));
btdos.addEventListener("click", procedimiento (15, 15000));
bttres.addEventListener("click", procedimiento (20, 20000));
btcuatro.addEventListener("click", procedimiento (25, 25000));
btcinco.addEventListener("click", procedimiento (50, 50000));