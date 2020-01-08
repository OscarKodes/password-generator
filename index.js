// DECLARE SELECTORS ================================
const pokemonDisplay = document.querySelector(".pokemon-display");
const pokemonBtn = document.querySelector(".pokemon-btn");
const adjDisplay = document.querySelector(".adj-display");
const adjBtn = document.querySelector(".adj-btn");


// DECLARE HTTP GET REQUEST =========================




// Declare Listeners =====================
pokemonBtn.addEventListener("click", () => {

  // passwordDisplay.innerText = "Clicked";
  let randomNum = Math.ceil(Math.random() * 150 + 1);

  var request = new XMLHttpRequest()
  let url = 'https://pokeapi.co/api/v2/pokemon/' + randomNum;

  request.open('GET', url, true)
  request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
      pokemonDisplay.innerText = data.species.name;
    } else {
      console.log('error')
    }
  }
  request.send();
});


// Declare Listeners =====================
adjBtn.addEventListener("click", () => {

  var request = new XMLHttpRequest()
  let randomLength = Math.ceil(Math.random() * 25 + 1);
  let wordArr = ["tree", "car", "sushi", "bird", "fire"];
  let randomWord = wordArr[Math.floor(Math.random() * 5)];
  let url = 'https://api.datamuse.com/words?rel_jjb=' + randomWord +'&max=' + randomLength;

  request.open('GET', url, true)
  request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
      adjDisplay.innerText = data.reverse()[0].word;
    } else {
      console.log('error')
    }
  }
  request.send();
});
