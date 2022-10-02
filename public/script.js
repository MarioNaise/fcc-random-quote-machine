const text = $("#text");
const author = $("#author");
const newQuote = $("#new-quote");
const tweetQuote = $("#tweet-quote");
const quoteUrl = "https://quotable.io/random";
const link =
    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";
let query = "";

async function updateQuote(url) {
    const response = await fetch(url);
    let data = await response.json();
    text.html(data.content);
    author.html("- "+data.author);
    query = encodeURI(data.content) + encodeURI(data.author);
    tweetQuote[0].href = link + query;
}

updateQuote(quoteUrl);

newQuote.on("click", () => {
    updateQuote(quoteUrl);
});
