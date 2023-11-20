const leguin = "Ursula K. LeGuin";

const quotes = [
  { 
    author: leguin, 
    quote: "People who deny the existence of dragons are often eaten by dragons. From within."
  },
  {
    author: leguin,
    quote: "It is good to have an end to journey toward; but it is the journey that matters, in the end."
  },
  {
    author: leguin, 
    quote: "A writer is a person who cares what words mean, what they say, how they say it."
  },
  {
    author: leguin,
    quote: "It is good to have an end to journey toward; but it is the journey that matters, in the end."
  },
  {
    author: leguin,
    quote: "We read books to find out who we are."
  },
  {
    author: leguin,
    quote: "What sane person could live in this world and not be crazy?"
  }
]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomQuote() {
  return quotes[getRandomInt(quotes.length)];
}

var obj = getRandomQuote();
document.getElementById('quote').innerHTML = obj.quote;
document.getElementById('author').innerHTML = obj.author;
