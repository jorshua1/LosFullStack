const nota = () => {
  fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("#i").innerText = ("Advice: #")+data.slip.id;
      document.querySelector("#si").innerText = data.slip.advice;
    });
};

document.querySelector("#generarNota").addEventListener("click", () => nota());
