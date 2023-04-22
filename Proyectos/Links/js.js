let x = document.getElementById("recorte");
let nuevos = document.querySelector(".nuevos");
x.addEventListener("click", () => {
  nuevos.style.display = "flex";
});
async function acortador() {
  let links = document.querySelector(".links").value;
  url = `https://api.shrtco.de/v2/shorten?url=${links}`;
  let response = await fetch(url);
  let { result } = await response.json();
  let short_link = result.short_link;
  let short_link2 = result.short_link2;
  let short_link3 = result.short_link3;
  let original_link = result.original_link;
  return showLinks({ short_link, short_link2, short_link3, original_link });
}
x.addEventListener("click", () => acortador());
function showLinks({ short_link, short_link2, short_link3, original_link }) {
  document.getElementById("Link1").innerText = short_link;
  document.getElementById("Link2").innerText = short_link2;
  document.getElementById("Link3").innerText = short_link3;
  document.getElementById("url").innerText = original_link;
  document.getElementById("url1").innerText = original_link;
  document.getElementById("url2").innerText = original_link;
}
function copiar(id) {
  let link1 = document.getElementById(`${id}`).innerText;
  navigator.clipboard.writeText(link1);
  let boton = document.querySelector(`#btn${id}`)
  boton.innerText = "¡COPIADO!";
  boton.style.color="black";
  setTimeout(()=>{
    boton.innerText = "COPIAR";
    boton.style.color="white";
  }, 1000)
}

document.querySelector("#btnLink1").addEventListener("click", () => copiar("Link1"));
document.querySelector("#btnLink2").addEventListener("click", () => copiar("Link2"));
document.querySelector("#btnLink3").addEventListener("click", () => copiar("Link3"));


let btnMenu = document.querySelector(".hambugerr");
let menu = document.querySelector(".menuHam");
let hambuger = document.querySelector(".hambugerDos");

btnMenu.addEventListener("click", () => {
    menu.style.display = "block";
    hambuger.style.display = "block";
    btnMenu.style.display = "none";
    btnMenu.style.color = "white";
  });

  hambuger.addEventListener("click", () => {
    menu.style.display = "none";
    hambuger.style.display = "none";
    btnMenu.style.display = "block";
  });

