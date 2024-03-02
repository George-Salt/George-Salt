let quoteTextElement = document.querySelector("main .quote .text");
let quoteAuthorElement = document.querySelector("main .quote .author");
let quotes = [
  {
    text: "Если хочешь узнать человека, не слушай, что о нём говорят другие, послушай, что он говорит о других.",
    author: "Вуди Аллен",
    link: "https://www.woodyallen.com/"
  },
  {
    text: "Когда тебе тяжело, всегда напоминай себе о том, что если ты сдашься, лучше не станет.",
    author: "Майк Тайсон",
    link: "https://miketysontv.com/"
  },
  {
    text: "Поколения работают на работах, которые ненавидят, чтобы покупать вещи, которые им не нужны.",
    author: "Чак Паланик",
    link: "https://www.chuckpalahniuk.net/"
  },
  {
    text: "Думай о смысле, а слова придут сами.",
    author: "Льюис Кэрролл",
    link: "https://lewis-carroll.ru/"
  },
  {
    text: "Не бойтесь врагов, бойтесь друзей. Предают друзья, а не враги.",
    author: "Джонни Депп",
    link: "https://johnny-depp.org/"
  },
];


function renderRandomQuote(quotes) {
  let quote = quotes[Math.floor(Math.random() * Object.keys(quotes).length)];
  quoteTextElement.textContent = quote.text;
  quoteAuthorElement.textContent = quote.author;
  quoteAuthorElement.href = quote.link;
};

renderRandomQuote(quotes);