// const form = document.querySelector('.shorten__form');
// const input = form.querySelector('input');
// const btn = form.querySelector('button');

// btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   const url = input.value;
//   const api = `https://api.shrtco.de/v2/shorten?url=${url}`;

//   fetch(api)
//     .then((response) => response.json())
//     .then((data) => {
//       const result = document.querySelector('.shorten__result');
//       result.innerHTML = `
//         <div class="result__original">
//           <p>${data.result.original_link}</p>
//         </div>
//         <div class="result__short">
//           <p>${data.result.full_short_link}</p>
//           <button class="copy-btn">Copy</button>
//         </div>
//       `;
//     });
// });