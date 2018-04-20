// cards array to hold all cards using rest parameter
const card = document.getElementsByClassName('card');
const cards = [...card];
console.log(cards);

const deck = document.getElementsById('deck');

// declaring move variable
let moves = 0;
let counter = document.querySelector(".moves");

// declare variables for star icons
const stars = document.querySelectorAll(".fa-star");

// declaring variable of matchedCards
let matchedCard = document.getElementsByClassName("match");

 // stars list
 let starsList = document.querySelectorAll(".stars li");

 // close icon in modal
 let closeicon = document.querySelector(".close");

 // declare modal
 let modal = document.getElementById("popup1")

//add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
var openedCards = [];

//set up the event listener for a card.
for (var i = 0; i < cards.length; i++){
   cards[i].addEventListener("click", displayCard);

/*
If a card is clicked:
* display the card's symbol (put this functionality in another function that you call from this one)
* add event listener click on the cards, display card on click
*/
var displayCard = function (){
   this.classList.toggle("open");
   this.classList.toggle("show");
   this.classList.toggle("disabled");
}

//add cards to openedCards array and check if cards are a match
function cardOpen() {
    openedCards.push(this);
    var pairCompare = openedCards.length;
    if(pairCompare === 2){
        moveCounter();
        if(openedCards[0].type === openedCards[1].type){
            matched();
        } else {
            unmatched();
        }
    }
};


// add display card function to be initialized when card is clicked,
//https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

document.body.onload = startGame();

/*
 * loop through each card and create its HTML
 * add each card's HTML to the page
 */
function startGame(){
    cards = shuffle(cards);
    for (var i = 0; i < cards.length; i++){
        deck.innerHTML = "";
        [].forEach.call(cards, function(item) {
            deck.appendChild(item);
        });
        cards[i].classList.remove("show", "open", "match", "disabled");
    }

/*function newGame(){
    cards = function shuffle(cards);
    for (var i = 0; i < shuffledDeck.length; i++) {
        [].forEach.call(shuffledDeck, function(item){
            deck.appendChild(item);
        });
    }
}

document.body.onload = function newGame();
*/




//if the list already has another card, check to see if the two cards match

 /*
 *  -
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
