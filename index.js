// DECLARE SELECTORS ================================
const pokemonDisplay = document.querySelector(".pokemon-display");
const adjDisplay = document.querySelector(".adj-display");
const nounDisplay = document.querySelector(".noun-display");
const generateBtn = document.querySelector(".generate-btn");

// Declare Listeners =====================
generateBtn.addEventListener("click", () => {
  generatePokemon();
  generateAdj();
  generateNoun();
});

// API HTTP REQUEST Helper Functions =========================
const generatePokemon = () => {
  let randomNum = Math.ceil(Math.random() * 806 + 1);

  let request = new XMLHttpRequest()
  let url = 'https://pokeapi.co/api/v2/pokemon/' + randomNum;

  request.open('GET', url, true)
  request.onload = function() {
    // Begin accessing JSON data here
    let data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
      pokemonDisplay.innerText = data.species.name;
    } else {
      console.log('error')
    }
  }
  request.send();
}

const generateAdj = () => {
  let request = new XMLHttpRequest()
  let randomLength = Math.ceil(Math.random() * 25 + 1);
  let wordArr = ["love", "car", "sushi", "man", "paint"];
  let randomWord = wordArr[Math.floor(Math.random() * 5)];
  let url = 'https://api.datamuse.com/words?rel_jjb=' + randomWord +'&max=' + randomLength;

  request.open('GET', url, true)
  request.onload = function() {
    // Begin accessing JSON data here
    let data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
      adjDisplay.innerText = data.reverse()[0].word;
    } else {
      console.log('error')
    }
  }
  request.send();
}

const generateNoun = () => {
  let request = new XMLHttpRequest()
  let randomLength = Math.ceil(Math.random() * 25 + 1);
  let wordArr = ["black", "stolen", "white", "salty", "liquid", "vegetarian"];
  let randomWord = wordArr[Math.floor(Math.random() * 6)];
  let url = 'https://api.datamuse.com/words?rel_jja=' + randomWord +'&max=' + randomLength;

  request.open('GET', url, true)
  request.onload = function() {
    // Begin accessing JSON data here
    let data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
      nounDisplay.innerText = data.reverse()[0].word;
    } else {
      console.log('error')
    }
  }
  request.send();
}
