const cinco = () => {
  let valor = document.querySelector(".plata").value;
  let persona = document.querySelector(".persona").value;
  let personacuenta = valor / persona;
  let tip = valor * (5 / 100);
  let personatip = tip / persona;
  let total = personacuenta + personatip;

  document.getElementById("tips").value = ("$" + personatip);
  document.getElementById("total").value = ("$" + total);
};

const diez = () => {
  let valor = document.querySelector(".plata").value;
  let persona = document.querySelector(".persona").value;
  let personacuenta = valor / persona;
  let tip = valor * (10 / 100);
  let personatip = tip / persona;
  let total = personacuenta + personatip;

  document.getElementById("tips").value = ("$" + personatip);
  document.getElementById("total").value = ("$" + total);
};
const quince = () => {
  let valor = document.querySelector(".plata").value;
  let persona = document.querySelector(".persona").value;
  let personacuenta = valor / persona;
  let tip = valor * (15 / 100);
  let personatip = tip / persona;
  let total = personacuenta + personatip;

document.getElementById("tips").value = ("$" + personatip);
  document.getElementById("total").value = ("$" + total);
};
const veinticinco = () => {
  let valor = document.querySelector(".plata").value;
  let persona = document.querySelector(".persona").value;
  let personacuenta = valor / persona;
  let tip = valor * (25 / 100);
  let personatip = tip / persona;
  let total = personacuenta + personatip;

  document.getElementById("tips").value = ("$" + personatip);
  document.getElementById("total").value = ("$" + total);
};
const cincuenta = () => {
  let valor = document.querySelector(".plata").value;
  let persona = document.querySelector(".persona").value;
  let personacuenta = valor / persona;
  let tip = valor * (50 / 100);
  let personatip = tip / persona;
  let total = personacuenta + personatip;

  document.getElementById("tips").value = ("$" + personatip);
  document.getElementById("total").value = ("$" + total);
};


const clean = () => {
    document.querySelector(".plata").value = ("");
    document.querySelector(".persona").value = ("");
    document.getElementById("tips").value =("$0");
    document.getElementById("total").value =("$0");
}