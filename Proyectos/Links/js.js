let x = document.getElementById("recorte");
x.addEventListener("click", () => acortador(url));

let links = document.querySelector(".links").value;
url = `https://api.shrtco.de/v2/shorten?url=${links}`;

async function acortador(url) {
  let response = await fetch(url);
  let { result } = await response.json();
  let short_link = result.short_link;
  let short_link2 = result.short_link2;
  let short_link3 = result.short_link3;
  return showLinks({ short_link, short_link2, short_link3 });
}

function showLinks({ short_link, short_link2, short_link3 }) {
  document.getElementById("link1").innerText = short_link;  
  console.log(document.getElementById("link1"));
//   document.getElementById("link1").setAttribute("href", short_link);
  document.getElementById("link2").innerText = short_link2;
  document.getElementById("link3").innerText = short_link3;
}
