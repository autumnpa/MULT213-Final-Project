
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
  let html = "";
  html += `<p>${data}</p>`
  const quote = document.getElementById("quote");
  quote.innerHTML += html;
  console.log(data);
}
fetchJSON('https://api.paperquotes.c// om/apiv1/quotes/?tags=motivation', displayData);

//this function is going to give the users the option to change the background color
function backgroundColour(){
  document.body.style.backgroundColor = "red";
}