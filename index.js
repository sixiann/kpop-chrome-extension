const colors = [
  "#FADDE1",
  "#FFCAD4",
  "#FCD5CE",
  "#ffc2d1",
  "#ff8fab",
  "#fb6f92",
  "#ffe5ec",
  "#a2d2ff",
  "#bde0fe",
  "#e8dff5",
  "#cdb4db"
];

function getRandom(array){
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}; 

function setRandomBackgroundColor() {
  const randomColor = getRandom(colors);
  document.body.style.backgroundColor = randomColor;
}

function displayRandomQuote() {
    const randomQuote = getRandom(quotes)['q'];
    const randomQuoteDiv = document.getElementById('random-quote');
    
    let i = 0;
    const speed = 35;

    function typeWriter() {
        if (i < randomQuote.length) {
            randomQuoteDiv.innerHTML += randomQuote.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
};


function initialize(){
    setRandomBackgroundColor();
    displayRandomQuote();
}

window.onload = initialize;
