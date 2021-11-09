//Listor beroende på svårgihetsgrad
let arrayEasy = [
  "Potatismos",
  "Landningsbana",
  "Sverige",
  "Internet",
  "Datorskärm",
];

let arrayHard = ["Kex", "Sax", "Sko", "Träd", "Öland"];
// Points för att måla upp hangman
let points;
//Definera boxarna som visas när spelet är i olika states
let startState = document.getElementById("selectDiff");
let gameState = document.getElementById("hangmangame");
let endState = document.getElementById("endBox");

//Knapparna med svårighetsgrad i JavaScript
let easyDiff = document.getElementById("easyDiff");
let hardDiff = document.getElementById("hardDiff");

easyDiff.addEventListener("click", easyGame);
hardDiff.addEventListener("click", hardGame);
//Funktion från att gå från start to game state
function startGame() {
  startState.style.display = "none";
  gameState.style.display = "block";
}

//Kod för att bryta ner orden i listorna
//Funktionen för att få fram ett randomord
let easyWord = Array.from(arrayEasy[randomNum()]);
let hardWord = Array.from(arrayHard[randomNum()]);
function randomNum(min, max) {
  min = Math.ceil(0);
  max = Math.floor(5);
  return Math.floor(Math.random() * (max - min) + min);
}
//Alternativt kan koden skrivas:
let number = Math.floor(Math.random() * 5);

// skapa en loop som gör en guessBox för varje varv.
// Längden ska vara lika lång som easyWord eller hardWord
let guessWord = document.getElementById("theWord");
for (let i = 0; i < easyWord.length; i++) {
  console.log(easyWord[i]);
  guessWord.innerHTML += "<span class='test'></span>";
}
//Funktionerna för spelen beroende på svårighetsgrad
// Kanske kan göra om detta till en funktion?
function easyGame() {
  startGame();
  console.log(easyWord);
}

function hardGame() {
  startGame();
  console.log(hardWord);
}

// Deklarerar de olika delarna av hangman svg

let scaffolding = document.getElementById("scaffold");
let legs = document.getElementById("legs");
let arms = document.getElementById("arms");
let body = document.getElementById("body");
let head = document.getElementById("head");

// Gömmer alla delar av hangman, kan användas igen för en reset
function hideman() {
  scaffolding.style.display = "none"; // Är Head? Fixat
  body.style.display = "none"; // Är legs? Fixat
  arms.style.display = "none"; // Är arms? Fixat
  legs.style.display = "none"; // Är body? Fixat
  head.style.display = "none"; // Är Scaffolding? Fixat
  points = 0;
}

hideman();

// Test av points funktion

function wrongGuess() {
  if (points < 1) {
    scaffolding.style.display = "inline";
  } else if (points < 2) {
    head.style.display = "inline";
  } else if (points < 3) {
    body.style.display = "inline";
  } else if (points < 4) {
    arms.style.display = "inline";
  } else if (points < 5) {
    legs.style.display = "inline";
  } else {
    console.log("Something went wrong with wrongGuess()");
    // Kanske ska slänga in gameOver() ?
  }
  points = points + 1;
}

// Farliga testar här:
function guess(charStr) {
  if (easyWord.includes(charStr)) {
    console.log("Yapp");
  } else {
    wrongGuess();
  }
}

// Något vi kanske kan använda? Men vi måste göra om den då en del grejer kommer tas bort från javaScript
document.onkeyup = function (evt) {
  evt = evt || window.event;
  var charCode = evt.keyCode || evt.which;
  var charStr = String.fromCharCode(charCode);
  console.log(charStr);
  guess(charStr);
};

// Guess funktion
