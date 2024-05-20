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
  "#cdb4db",
];

function getRandom(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function setRandomBackgroundColor() {
  const randomColor = getRandom(colors);
  document.body.style.backgroundColor = randomColor;
}

function typeWriter(div, text, speed) {
  let i = 0;
  function type() {
    if (i < text.length) {
      div.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

function displayRandomQuote() {
  const randomQuote = getRandom(quotes)["q"];
  const randomQuoteDiv = document.getElementById("random-quote");
  typeWriter(randomQuoteDiv, randomQuote, 35);
}

function displayRandomIdol() {
  const randomIdol = getRandom(idols);

  const IdolName = randomIdol["name"];
  const IdolPic = randomIdol["image_url"];
  const IdolUrl = randomIdol["member_url"];

  //display name
  const nameElement = document.querySelector(".title");
  typeWriter(nameElement, IdolName, 90);

  //display picture
  const imgElement = document.createElement("img");
  imgElement.setAttribute("draggable", "false");
  imgElement.setAttribute("src", IdolPic);
  // imgElement.classList.add("animate__animated");
  // imgElement.classList.add("animate__jackInTheBox");

  document.getElementById("idol-pic").appendChild(imgElement);

  // Create a link element
  const linkElement = document.createElement("a");
  linkElement.setAttribute("href", IdolUrl);
  linkElement.setAttribute("target", "_blank"); // Open link in a new tab
  linkElement.appendChild(imgElement);

  // Append the link to the "idol-pic" div
  document.getElementById("idol-pic").appendChild(linkElement);
}

function initialize() {
  setRandomBackgroundColor();
  displayRandomQuote();
  displayRandomIdol();
}

window.onload = initialize;
