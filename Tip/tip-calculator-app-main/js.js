const cinco = () => {
  borrar();
  let valor = document.querySelector(".plata").value;
  let persona = document.querySelector(".persona").value;
  let tip = valor * (5 / 100);
  let personatip = tip / persona;
  let total = personacuenta + personatip ;

  document.getElementById("tips").value = "$" + personatip.toFixed(0);
  document.getElementById("total").value = "$" + total.toFixed(0);

   let boton1 = document.querySelector("#boton1");
   function cambiarEstilo() {
     boton1.style.backgroundColor = "#9fe8df";
     boton1.style.color = "hsl(183, 100%, 15%)";
   }
  // boton1.classList.add("activo");
   function Normal() {
     boton1.style.backgroundColor = "hsl(183, 100%, 15%)";
     boton1.style.color = "hsl(0, 0%, 100%)";
   }
 
   boton1.addEventListener("click", cambiarEstilo);
   boton1.addEventListener("mouseleave", Normal);
};

const diez = () => {
  borrar();
  let valor = document.querySelector(".plata").value;
  let persona = document.querySelector(".persona").value;
  let personacuenta = valor / persona;
  let tip = valor * (10 / 100);
  let personatip = tip / persona;
  let total = personacuenta + personatip;

  document.getElementById("tips").value = "$" + personatip.toFixed(0);
  document.getElementById("total").value = "$" + total.toFixed(0);

  let boton2 = document.querySelector("#boton2");
  function cambiarEstilo() {
    boton2.style.backgroundColor = "#9fe8df";
    boton2.style.color = "hsl(183, 100%, 15%)";
  }
  function Normal() {
    boton2.style.backgroundColor = "hsl(183, 100%, 15%)";
    boton2.style.color = "hsl(0, 0%, 100%)";
  }

  boton2.addEventListener("click", cambiarEstilo);
  boton2.addEventListener("mouseleave", Normal);
};
const quince = () => {
  borrar();
  let valor = document.querySelector(".plata").value;
  let persona = document.querySelector(".persona").value;
  let personacuenta = valor / persona;
  let tip = valor * (15 / 100);
  let personatip = tip / persona;
  let total = personacuenta + personatip;

  document.getElementById("tips").value = "$" + personatip.toFixed(0);
  document.getElementById("total").value = "$" + total.toFixed(0);
  let boton3 = document.querySelector("#boton3");
  function cambiarEstilo() {
    boton3.style.backgroundColor = "#9fe8df";
    boton3.style.color = "hsl(183, 100%, 15%)";
  }
  function Normal() {
    boton3.style.backgroundColor = "hsl(183, 100%, 15%)";
    boton3.style.color = "hsl(0, 0%, 100%)";
  }

  boton3.addEventListener("click", cambiarEstilo);
  boton3.addEventListener("mouseleave", Normal);
};
const veinticinco = () => {
  borrar();
  let valor = document.querySelector(".plata").value;
  let persona = document.querySelector(".persona").value;
  let personacuenta = valor / persona;
  let tip = valor * (25 / 100);
  let personatip = tip / persona;
  let total = personacuenta + personatip;

  document.getElementById("tips").value = "$" + personatip.toFixed(0);
  document.getElementById("total").value = "$" + total.toFixed(0);
  let boton4 = document.querySelector("#boton4");
  function cambiarEstilo() {
    boton4.style.backgroundColor = "#9fe8df";
    boton4.style.color = "hsl(183, 100%, 15%)";
  }
  function Normal() {
    boton4.style.backgroundColor = "hsl(183, 100%, 15%)";
    boton4.style.color = "hsl(0, 0%, 100%)";
  }

  boton4.addEventListener("click", cambiarEstilo);
  boton4.addEventListener("mouseleave", Normal);
};
const cincuenta = () => {
  borrar();
  let valor = document.querySelector(".plata").value;
  let persona = document.querySelector(".persona").value;
  let personacuenta = valor / persona;
  let tip = valor * (50 / 100);
  let personatip = tip / persona;
  let total = personacuenta + personatip;

  document.getElementById("tips").value = "$" + personatip.toFixed(0);
  document.getElementById("total").value = "$" + total.toFixed(0);
  let boton5 = document.querySelector("#boton5");
  function cambiarEstilo() {
    boton5.style.backgroundColor = "#9fe8df";
    boton5.style.color = "hsl(183, 100%, 15%)";
  }
  function Normal() {
    boton5.style.backgroundColor = "hsl(183, 100%, 15%)";
    boton5.style.color = "hsl(0, 0%, 100%)";
  }

  boton5.addEventListener("click", cambiarEstilo);
  boton5.addEventListener("mouseleave", Normal);
};

const custom = () => {
  let boton6 = document.querySelector("#boton6");
  function cambiarEstilo() {
    boton6.style.backgroundColor = "#9fe8df";
    boton6.style.color = "hsl(183, 100%, 15%)";
  }
  function Normal() {
    boton6.style.backgroundColor = "hsl(183, 100%, 15%)";
    boton6.style.color = "hsl(0, 0%, 100%)";
  }
  boton6.addEventListener("click", cambiarEstilo);
  boton6.addEventListener("mouseleave", Normal);


  document.getElementById("boton6").addEventListener("keypress", custom);
  function custom() {
  let custom =document.querySelector("#boton6").value;
  let valor = document.querySelector(".plata").value;
  let persona = document.querySelector(".persona").value;
  let personacuenta = valor / persona;
  let tip = valor * ( custom/ 100);
  let personatip = tip / persona;
  let total = personacuenta + personatip;

  document.getElementById("tips").value = "$" + personatip.toFixed(2);
  document.getElementById("total").value = "$" + total.toFixed(2);
}

};

function borrar(){
  let boton6 = document.querySelector("#boton6"); 
  boton6.value = ""
}

const clean = () => {
  borrar()
  document.querySelector(".plata").value = "";
  document.querySelector(".persona").value = "";
  document.querySelector("#tips").value = "$0";
  document.querySelector("#total").value = "$0";
};
