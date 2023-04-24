

/*let idBill = document.getElementById("bill");
const bCinco = document.getElementById("cinco").value;
const bDiez = document.getElementById("diez").value;
const bViente = document.getElementById("veinte").value;
const bViCinco = document.getElementById("vecinco").value;
const bCincuenta = document.getElementById("cincuenta").value;
const bOtro = document.getElementById('otro').value;
const bAmount = document.getElementById("amount");
const total = document.getElementById('totalP');*/

function calcularPorcentaje(porcentaje) {
    let valor = document.getElementById("bill").value;
    let resultado = valor * (porcentaje/100);
    resultado.toFixed(2);
    document.getElementById("amount").value = resultado;
  }
  function calcularOtroPorcentaje() {
    let valor = document.getElementById("bill").value;
    let otroPorcentaje = document.getElementById("otro").value;
    let resultado = valor * (otroPorcentaje/100);
    resultado.toFixed(2);
  
    document.getElementById("amount").value = resultado;
  }
  function pagoPorPersona(){
    let valor = parseFloat(document.getElementById("bill").value);
    let personas =parseFloat( document.getElementById("people").value);
    let totalPersona = valor/personas;
    totalPersona.toFixed(2);
    document.getElementById("totalP").value= totalPersona;

  }


  function validarValor() {
    var valor = document.getElementById("bill").value;
    var botones = document.getElementsByTagName("button");
    var inputOtroPorcentaje = document.getElementById("otro");
    
    if (valor === "") {
      inputOtroPorcentaje.disabled = true;
      
      for (var i = 0; i < botones.length; i++) {
        botones[i].disabled = true;
      }
    } else {
      inputOtroPorcentaje.disabled = false;
      
      for (var i = 0; i < botones.length; i++) {
        botones[i].disabled = false;
      }
    }
  }
  const resetB =document.getElementById("reset")
  resetB.addEventListener("click",function(){

    document.getElementById("bill").value="";
    document.getElementById("people").value="";
    document.getElementById("totalP").value="";
    document.getElementById("amount").value="";


  })