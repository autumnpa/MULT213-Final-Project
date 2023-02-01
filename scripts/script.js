// JavaScript for MULT213 A2


const quotes = document.getElementById("quote");

function fetchJSON(url, callback) {
  // Fetches data from quote API - We had to generate an authorization key in order to use this as well.
  fetch('https://api.paperquotes.com/apiv1/quotes/?tags=motivation', { headers: { Authorization: "Token 06c446dfd2ab6605cba53a1ca7d52c789681ad55" } })
    .then(response => response.json())
    .then(data => {
      callback(data);
    })
    .catch(error => console.error('Error:', error))
}

function displayData(data) {
  console.log(data);
}

fetchJSON('https://api.paperquotes.com/apiv1/quotes/?tags=motivation', displayData);

// const quotes = document.getElementById("quote");
// quotes.innerHTML += html;
// quotes.innerHTML = html;


// function fetchJSON(url) {
//   fetch('https://zenquotes.io/api/quotes')
//     .then(response => response.json())
//     .then(data => {
//       let html = "";

//       for (let i = 0; i < data.length; i++) {
//         html += `<li>${data[i].id}</li>`;
//       }

//       if (data.length <= 0)
//         html += `<p>No quotes exist.</p>`

//       const quotes = document.getElementById("quote");
//       quotes.innerHTML += html;
//     })
//     .catch(error => console.error('Error:', error))
// }
// fetchJSON('https://zenquotes.io/api/quotes')
// console.log('https://zenquotes.io/api/quotes');