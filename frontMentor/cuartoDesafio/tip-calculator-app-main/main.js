let boton1 = document.querySelector("#botn1");
let boton2 = document.querySelector("#botn2");
let boton3 = document.querySelector("#botn3");
let boton4 = document.querySelector("#botn4");
let boton5 = document.querySelector("#botn5");
let reseteado = document.querySelector("#reset");

reseteado.addEventListener("click", () => clean());
let custom = document.querySelector("#custom");

console.log(document.querySelector("#tipo").innerText);

let procedimiento = (porcentaje, valor) => {
  let personas = Number(document.querySelector("#cantipeople").value);
  let calculoTip = (valor * porcentaje) / 100 / personas;
  return calculoTip;
};

function actualizaCampos(valorTotal, valorTip, custom) {
  document.getElementById("tio").value = "$" + valorTotal.toFixed(2);
  document.getElementById("tipo").value = "$" + valorTip.toFixed(2);


}

function calculoPropina(porcentaje) {
  let valor = parseFloat(document.querySelector("#valor").value);
  let personas = parseFloat(document.querySelector("#cantipeople").value);
  let error = document.querySelector("#error");
  if (isNaN(valor) || valor < 1 || isNaN(personas) || personas < 1) {
    error.innerText = "Ingrese un valor válido y el número de persona";
    error.removeAttribute("class", "alertHidden");
    error.setAttribute("class", "alertShow");
  } else {
    error.removeAttribute("class", "alertShow");
    error.setAttribute("class", "alertHidden");
    let tip = procedimiento(porcentaje, valor);
    let total = tip + valor / personas;
    actualizaCampos(total, tip);
    console.log(tip, total);
    document.querySelector("#tipo").innerText = tip;
    document.querySelector("#tio").innerText = total;
  }
}

boton1.addEventListener("click", () => calculoPropina(5));
boton2.addEventListener("click", () => calculoPropina(10));
boton3.addEventListener("click", () => calculoPropina(15));
boton4.addEventListener("click", () => calculoPropina(25));
boton5.addEventListener("click", () => calculoPropina(50));
custom.addEventListener("keydown", (e) => {
  if (e.code === "Enter") calculoPropina(parseFloat(e.target.value).toFixed(2));
});
// custom.addEventListener("KeyboardEvent", ()=> calculoPropina(parseFloat(custom.value)))
// reseteado.addEventListener("click", () => calculoPropina(parseInt(reseteado.value)));

function clean() {
  document.querySelector("#valor").value = "";
  document.querySelector("#cantipeople").value = "";
  document.querySelector("#tipo").innerText = "$0.00";
  document.querySelector("#tio").innerText = "$0.00";
  document.querySelector("#custom").value = "";
  
}

// document.getElementById("formCalculadora").addEventListener("submit", (e) => {
//   e.preventDefault();
// });
