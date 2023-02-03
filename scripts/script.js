let html = "";

// Try to get object out of data so it can be displayed

// Functions are fine - dont alter too much right now!!!!
function fetchJSON(url, callback) {
  // This randomizes the quote being diaplyed on the screen
  // The API gives us back 5 quotes that we can filter through
  const random = Math.floor(Math.random() * 5 + 1);
  // Fetches data from quote API - We had to generate an authorization key in order to use this as well.
  fetch('https://api.paperquotes.com/apiv1/quotes/?tags=motivation', {
    headers: {
      Authorization: "Token 06c446dfd2ab6605cba53a1ca7d52c789681ad55"
    }
  })
    .then(response => response.json())
    .then(data => {
      callback(data.results[random].quote);
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

const numItemsToGenerate = 1;

function renderItem() {
  fetch(`https://source.unsplash.com/1900x1100/?minimal`, {
    headers: {
      Authorization: "Client-ID 3dG7ZdUYykMRP-stnsf0e6smaF9HO9VmYIWBAdbqXuM"
    }
  })
    .
    then((response) => {
      let background = document.getElementById("background").style.backgroundImage = `url(${response.url})`;
    })

}


//this function is going to give the users the option to change the background color
// changing this function to togglen between our custom themes
// function backgroundColour() {
//   document.body.style.backgroundColor = "red";
//   document.getElementById('pageStyle').setAttribute("href", "styles/mikayla.css");

// }

// This function swaps our style sheets by injecting the opposite stylehseet into the id of swapStyle when the checkbox is checked/unchecked
function swapStyleSheet() {
  if (document.getElementById("swapStyle").checked) {
    document.getElementById("pageStyle").setAttribute('href', 'styles/mikayla.css');
  } else {
    document.getElementById("pageStyle").setAttribute('href', "styles/autumn.css");
  }
}

function defaultFont() {
  document.getElementById("title").style.fontFamily = "como", sans - serif;
}

function fontChange1() {
  document.getElementById("title").style.fontFamily = "blenny", sans - serif;
}

function fontChange2() {
  document.getElementById("title").style.fontFamily = "broadacre-hairline-4", sans - serif;
}

function fontChange3() {
  document.getElementById("title").style.fontFamily = "juniper-std", sans - serif;
}