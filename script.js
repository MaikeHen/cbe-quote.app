const quoteButton = document.querySelector("button");
const quoteTextSection = document.querySelector("main");

async function generateQuote() {
  const quoteText = await fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      quoteTextSection.appendChild(document.createTextNode(data.quote));
      quoteTextSection.appendChild(document.createTextNode(data.author));
    });
}

quoteButton.addEventListener("click", generateQuote);
