let x = document.getElementById("recorte");


async function acortador() {
  let links = document.querySelector(".links").value;
  url = `https://api.shrtco.de/v2/shorten?url=${links}`;
  let response = await fetch(url);
  let { result } = await response.json();
  let short_link = result.short_link;
  let short_link2 = result.short_link2;
  let short_link3 = result.short_link3;
  let original_link = result.original_link
  return showLinks({ short_link, short_link2, short_link3, original_link});
}

x.addEventListener("click", () => acortador());

function showLinks({ short_link, short_link2, short_link3, original_link }) {
  document.getElementById("link1").innerText = short_link;
  document.getElementById("link2").innerText = short_link2;
  document.getElementById("link3").innerText = short_link3;
  document.getElementById("url").innerText = original_link;
}
