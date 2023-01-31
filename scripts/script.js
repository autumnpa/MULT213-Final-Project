// JavaScript for MULT213 A2


// fetch('https://zenquotes.io/api/quotes/keyword=anxiety')
//   .then(response => response.json())
//   .catch(error => console.error('Error:', error))


const quotes = document.getElementById("quote");

function fetchJSON(url) {
  // Fetches data from posts
  fetch('https://api.paperquotes.com/apiv1/quotes/?tags=motivation', { headers: { Authorization: "Token 06c446dfd2ab6605cba53a1ca7d52c789681ad55" } })
    .then(response => response.json())
    .then(data => {
      let html = "";

      for (let i = 0; i < data.length; i++) {
        // creates a list of ids for posts
        html += `<p>${data[i].quote}</p>`;
      }
      console.log(data);

      if (data.length <= 0)
        html += `<p>No quotes exist.</p>`

      // outputs in div we labeled as id=posts in index.html
      const quotes = document.getElementById("quote");
      quotes.innerHTML += html;
    })
    .catch(error => console.error('Error:', error))
}
fetchJSON('https://api.paperquotes.com/apiv1/quotes/?tags=motivation')
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