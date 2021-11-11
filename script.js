//Listor beroende på svårgihetsgrad
let arrayAnimals = [
  "Cat",
  "Dog",
  "Dolphine",
  "Puma",
  "Elephant",
  "Fish",
  "Monkey",
  "Gorilla",
];

let arraySports = [
  "Tennis",
  "Football",
  "Hockey",
  "Paintball",
  "Racing",
  "Skiing",
  "Snowboarding",
  "ESPORT",
];

let arrayFood = [
  "Pizza",
  "Hamburger",
  "Soup",
  "Bread",
  "Milk",
  "Chocolate",
  "Potatoes",
  "Cheese",
];

let arrayCountries = [
  "Sweden",
  "Norway",
  "England",
  "France",
  "America",
  "Germany",
  "Finland",
  "Australia",
];

// Test av total stats
let totalWins = 0;
let totalLoss = 0;
let totalGame = 0;
let totalWinsBox = document.getElementById("totWins");
let totalLossBox = document.getElementById("totLoss");
let totalGameBox = document.getElementById("totGames");
// gameOn - säger om spelet ska lyssna på tangenttryck
let gameOn = false;
let theWord;
// Points för att måla upp hangman
let points;
let winPoints = 0;
//Definera boxarna som visas när spelet är i olika states
let startState = document.getElementById("firstPage");
let gameState = document.getElementById("mainPage");
let endState = document.getElementById("lastPage");
// Definera de olika win conditions
let youWon = document.getElementById("youWon");
let youLost = document.getElementById("youLost");
// Definerat restart knappen
let restart = document.getElementById("restart");
//Knapparna med svårighetsgrad i JavaScript
let animals = document.getElementById("animals");
let sports = document.getElementById("sports");
let food = document.getElementById("food");
let countries = document.getElementById("countries");
// Eventlyssnare för knappar
animals.addEventListener("click", animalsGame);
sports.addEventListener("click", sportsGame);
food.addEventListener("click", foodGame);
countries.addEventListener("click", countriesGame);
restart.addEventListener("click", restartGame);
//Funktion från att gå från start to game state
function startGame() {
  startState.style.display = "none";
  gameState.style.display = "block";
  gameOn = true;
  hideman(); // Gömmer kroppsdelarna på hangman vid start av nytt spel
}

//Kod för att bryta ner orden i listorna
//Funktionen för att få fram ett randomord

// let hardWord = Array.from(arrayHard[randomNum()].toUpperCase());

// skapa en loop som gör en guessBox för varje varv.
// Längden ska vara lika lång som theWord eller hardWord

//Funktionerna för spelen beroende på svårighetsgrad
// Kanske kan göra om detta till en funktion?

function animalsGame() {
  theWord = Array.from(
    arrayAnimals[Math.floor(Math.random() * arrayAnimals.length)].toUpperCase()
  );
  for (let i = 0; i < theWord.length; i++) {
    console.log(theWord[i]);
    guessWord.innerHTML += `<span id='${i}' class='test'>_</span>`; //här får ni ett span-element med klassen "test 0" först
  }
  startGame();
  console.log(theWord);
}
// Sports
function sportsGame() {
  theWord = Array.from(
    arraySports[Math.floor(Math.random() * arraySports.length)].toUpperCase()
  );
  for (let i = 0; i < theWord.length; i++) {
    console.log(theWord[i]);
    guessWord.innerHTML += `<span id='${i}' class='test'>_</span>`; //här får ni ett span-element med klassen "test 0" först
  }
  startGame();
  console.log(theWord);
}
// Food
function foodGame() {
  theWord = Array.from(
    arrayFood[Math.floor(Math.random() * arrayFood.length)].toUpperCase()
  );
  for (let i = 0; i < theWord.length; i++) {
    console.log(theWord[i]);
    guessWord.innerHTML += `<span id='${i}' class='test'>_</span>`; //här får ni ett span-element med klassen "test 0" först
  }
  startGame();
  console.log(theWord);
}
// Countries
function countriesGame() {
  theWord = Array.from(
    arrayCountries[
      Math.floor(Math.random() * arrayCountries.length)
    ].toUpperCase()
  );
  for (let i = 0; i < theWord.length; i++) {
    console.log(theWord[i]);
    guessWord.innerHTML += `<span id='${i}' class='test'>_</span>`; //här får ni ett span-element med klassen "test 0" först
  }
  startGame();
  console.log(theWord);
}

let guessWord = document.getElementById("theWord");

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
    loseState();
    // Kanske ska slänga in gameOver() ?
  }
  points = points + 1;
}

let guessWrong = [];
let guessRight = [];

// for theWord.length theWord == charStr if true ändra färg/lägg till bokstav
// i den indexen

// Farliga testar här:
function guess(charStr) {
  if (theWord.includes(charStr)) {
    if (guessRight.includes(charStr)) {
      console.log("You already guessed this lol");
    } else {
      guessIsRight(charStr);
      guessRight.push(charStr);
      // Något som hittar bokstaven i theWord och ändrar färg/skapar bokstaven på rätt plats
    }
  } else if (!guessWrong.includes(charStr)) {
    guessWrong.push(charStr);
    addWrong(charStr);
    wrongGuess();
  } else {
    console.log("Already guessed wrong lol");
  }
  checkWord();
}

// Kollar om du gissat alla bokstäver i theWord
function checkWord() {
  if (winPoints == theWord.length) {
    console.log("I think you won");
    winState();
  } else {
    console.log("Nope there's still more!");
  }
}

//Denna triggas när användaren trycker på en knapp
function guessIsRight(charStr) {
  for (let i = 0; i < theWord.length; i++) {
    if (charStr == theWord[i]) {
      document.getElementById(`${i}`).innerHTML = `${charStr}`;
      winPoints = winPoints + 1;
    }
  }
}

// Skapar bokstäver i HTML som vi har gissat fel
let wrongGuessHtml = document.getElementById("wrongGuess");
function addWrong(charStr) {
  wrongGuessHtml.innerHTML += `<span class="wrongGuess">${charStr}</span>`;
}

// Något vi kanske kan använda? Men vi måste göra om den då en del grejer kommer tas bort från javaScript
document.onkeydown = function (evt) {
  evt = evt || window.event;
  var charCode = evt.keyCode || evt.which;
  var charStr = String.fromCharCode(charCode);
  if (gameOn == true) {
    guess(charStr);
    console.log(charStr);
  }
};
// document.addEventListener('keydown', function(e) {
//   var char = event.which || event.keyCode;
// })

function winState() {
  youWon.textContent = "I THINK YOU GOD DAMN WON";
  youLost.style.display = "none";
  totalWins++;
  totalWinsBox.innerHTML = "Total wins: " + totalWins;
  endGame();
}

function loseState() {
  youLost.textContent = "Don't ever play this again. You suck.";
  youWon.style.display = "none";
  totalLoss++;
  totalLossBox.innerHTML = "Total losses: " + totalLoss;
  endGame();
}

function endGame() {
  gameOn = false;
  endState.style.display = "flex";
  totalGame++;
  totalGameBox.innerHTML = "Total games: " + totalGame;
}

function restartGame() {
  endState.style.display = "none"; // Hides the endState screen
  gameState.style.display = "none"; //Hides the game
  startState.style.display = "flex"; // Enter start screen
  guessWord.innerHTML = ""; // Resets the wordbox
  wrongGuessHtml.innerHTML = ""; //Reset the wrong guessed text boxes
  winPoints = 0; // Reset the points until win
  points = 0; // Reset the points until lost
  guessWrong = []; //Reset array with wrong guessed words
  guessRight = []; //Reset array with right guessed words
  console.log("Ah shit... Here we go again!"); // Famous quote from CJ
  youWon.style.display = "block"; // Reset the win message
  youLost.style.display = "block"; // Reset the lose message
}
