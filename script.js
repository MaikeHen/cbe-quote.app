const quoteButton = document.querySelector("button");
const quoteTextSection = document.querySelector("#quoteText");
const quoteAuthorSection = document.querySelector("#quoteAuthor");

generateQuote();

async function generateQuote() {
  const quoteText = await fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      quoteTextSection.innerText = data.quote;
      quoteAuthorSection.innerText = data.author;
    });
}

quoteButton.addEventListener("click", generateQuote);
