// JavaScript for MULT213 A2


fetch('https://zenquotes.io/api/quotes/keyword=anxiety')
  .then(response => response.json())
  .catch(error => console.error('Error:', error))

