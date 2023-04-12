const form = document.getElementById("formCalculadora");
const billInput = document.querySelector(".money");
const customTipInput = document.getElementById("boton6");
const peopleInput = document.querySelector(".persona");
const tipAmountInput = document.getElementById("tips");
const totalAmountInput = document.getElementById("total");
const resetButton = document.querySelector("button");

let bill = 0;
let customTip = 0;
let tipPercentage = 0;
let numOfPeople = 0;


function updateCalculations() {
  let tipAmount = (bill * (tipPercentage / 100)) / numOfPeople;
  let totalAmount = (bill * (1 + tipPercentage / 100)) / numOfPeople;
  tipAmountInput.value = "$" + tipAmount.toFixed(2);
  totalAmountInput.value = "$" + totalAmount.toFixed(2);
}


billInput.addEventListener("input", (event) => {
  bill = parseFloat(event.target.value);
  updateCalculations();
});

customTipInput.addEventListener("input", (event) => {
  customTip = parseFloat(event.target.value);
  tipPercentage = customTip;
  updateCalculations();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  numOfPeople = parseFloat(peopleInput.value);
  updateCalculations();
});

resetButton.addEventListener("click", (event) => {
  billInput.value = "";
  customTipInput.value = "";
  peopleInput.value = "";
  tipAmountInput.value = "$0.00";
  totalAmountInput.value = "$0.00";
  bill = 0;
  customTip = 0;
  tipPercentage = 0;
  numOfPeople = 0;
});


document.getElementById("boton1").addEventListener("click", () => {
  tipPercentage = 5;
  updateCalculations();
});

document.getElementById("boton2").addEventListener("click", () => {
  tipPercentage = 10;
  updateCalculations();
});

document.getElementById("boton3").addEventListener("click", () => {
  tipPercentage = 15;
  updateCalculations();
});

document.getElementById("boton4").addEventListener("click", () => {
  tipPercentage = 25;
  updateCalculations();
});

document.getElementById("boton5").addEventListener("click", () => {
  tipPercentage = 50;
  updateCalculations();
});
const buttons = document.querySelectorAll('.boton button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const customInput = document.getElementById('custom');

    if (button.id === 'boton6') {
      customInput.value = '0';
    } else {
      customInput.value = customInput.value || '0';
    }
  });
});