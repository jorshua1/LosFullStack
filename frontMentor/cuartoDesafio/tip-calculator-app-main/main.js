console.log("xd");
let boton1 = document.querySelector('#botn1');
let boton2 = document.querySelector('#botn2');
let boton3 = document.querySelector('#botn3');
let boton4 = document.querySelector('#botn4');
let boton5 = document.querySelector('#botn5');
let reseteado = document.querySelector('#reset')
console.log(boton1);

let procedimiento = (porcentaje, valor) => {
  let personas = Number(document.querySelector("#cantipeople").value)
  console.log(typeof porcentaje);
  console.log(valor);
  let calculoTip = ((valor * porcentaje) / 100) /personas;
  return calculoTip;
};

function actualizaCampos(valorTotal, valorTip){
    document.getElementById("total").value = "$" + valorTotal.toFixed(2);
    document.getElementById("tip").value = "$" + valorTip.toFixed(2); 
}

function calculoPropina(porcentaje){
    let valor = parseFloat(document.querySelector("#valor").value);
    let personas = parseFloat(document.querySelector("#cantipeople").value);
    let error = document.querySelector("#personita");
    if(isNaN(valor)|| isNaN(personas)){
        error.innerText = "Ingrese un valor válido y el número de persona"
        error.removeAttribute("class", "alerthidden")
        error.setAttribute("class", "alertShow")
        return;
    }else{
        let tip = procedimiento(porcentaje, valor);
        let total = (tip + (valor/personas));
        actualizaCampos(total, tip);
        error.removeAttribute("class", "alerthidden")
        error.setAttribute("class", "alertShow")
    }
}

boton1.addEventListener("click", () => procedimiento(5, 100000));
boton2.addEventListener("click", () => procedimiento(10));
boton3.addEventListener("click", () => procedimiento(15));
boton4.addEventListener("click", () => procedimiento(25));
boton5.addEventListener("click", () => procedimiento(50));
// reseteado.addEventListener("click", () => calculoPropina(parseInt(reseteado.value)));

function clean() {
    document.querySelector("#valor").value = "";
    document.querySelector("#cantipeople").value = "";
    document.getElementById("total").value = "$0.00";
    document.getElementById("tip").value = "$0.00";
  }

  document.getElementById("formCalculadora").addEventListener("submit", (e) => {
    e.preventDefault();
  });