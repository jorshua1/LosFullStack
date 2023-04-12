let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let boton3 = document.getElementById("boton3");
let boton4 = document.getElementById("boton4");
let boton5 = document.getElementById("boton5");
let boton6 = document.getElementById("boton6");

let procedimiento = (porcentaje, valor) => {
  let personas = Number(document.querySelector(".persona").value);
  console.log(personas);
  let calculoTip = (valor * (porcentaje / 100)) / personas;
  return calculoTip;
};

function actualizarCampos(valorTotal, valorTip) {
  document.getElementById("total").value = "$" + valorTotal.toFixed(2);
  document.getElementById("tips").value = "$" + valorTip.toFixed(2);
}

function calcularPropina(porcentaje) {
  let valor = parseFloat(document.querySelector(".money").value);
  let personas = parseInt(document.querySelector(".persona").value);

  if (isNaN(valor) || isNaN(personas)) {
    alert("Ingrese un monto de factura válido y el número de personas");
    return;
  }

  let tip = procedimiento(porcentaje, valor);
  let total = (tip + (valor/personas));
  actualizarCampos(total, tip);
}

boton1.addEventListener("click", () => calcularPropina(5));
boton2.addEventListener("click", () => calcularPropina(10));
boton3.addEventListener("click", () => calcularPropina(15));
boton4.addEventListener("click", () => calcularPropina(20));
boton5.addEventListener("click", () => calcularPropina(25));
boton6.addEventListener("click", () => calcularPropina(parseInt(boton6.value)));

function clean() {
  document.querySelector(".money").value = "";
  document.querySelector(".persona").value = "";
  document.getElementById("total").value = "$0.00";
  document.getElementById("tips").value = "$0.00";
}

document.getElementById("formCalculadora").addEventListener("submit", (e) => {
  e.preventDefault();
});
