let html = "";

// Try to get object out of data so it can be displayed

// Functions are fine - dont alter too much right now!!!!
function fetchJSON(url, callback) {
  // Fetches data from quote API - We had to generate an authorization key in order to use this as well.
  fetch('https://api.paperquotes.com/apiv1/quotes/?tags=motivation', { headers: {Authorization: "Token 06c446dfd2ab6605cba53a1ca7d52c789681ad55"} })
    .then(response => response.json())
    .then(data => {
      callback(data.results[0].quote);
    })
    .catch(error => console.error('Error:', error))
}

function displayQuote(individualQuote) {
  let html = "";
  html += `<p>${individualQuote}</p>`
  const quoteArea = document.getElementById("quoteArea");
  quoteArea.innerHTML += html;
  console.log(individualQuote);
}
fetchJSON('https://api.paperquotes.com/apiv1/quotes/?tags=motivation', displayQuote);

//this function will be used to get access to the unsplash image API
function fetchBackgroundJSON(url) {
  fetch('curl https://api.unsplash.com/search/photos?query=minimal',{ headers: { Authorization: "Client-ID 3dG7ZdUYykMRP-stnsf0e6smaF9HO9VmYIWBAdbqXuM"}} )
.then(pictureResoonse = pictureResponse.json())
.then(images => {
  callback(images.id);
  console.log(images)
})
.catch(error=console.error('Error:', error))
}

function displayImages(backgroundImage) {
  document.getElementById("body").style.backgroundImage= ``
}


//this function is going to give the users the option to change the background color
function backgroundColour(){
  document.body.style.backgroundColor = "red";
}

function fontChange1(){
  document.getElementById("title").style.fontFamily="Impact, Charcoal, sans-serif";
}

function fontChange2(){
  document.getElementById("title").style.fontFamily="Charcoal, sans-serif";
}

function fontChange3(){
  document.getElementById("title").style.fontFamily= "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif";}

