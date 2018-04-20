// cards array to hold all cards using rest parameter
let card = document.getElementsByClassName("card");
let cards = [...card];
console.log(cards);

/*set up the event listener for a card. If a card is clicked:
* display the card's symbol (put this functionality in another function that you call from this one)
* add event listener click on the cards, display card on click
*/
for (var i = 0; i < cards.length; i++){
   cards[i].addEventListener("click", displayCard);

// add display card function to be initialized when card is clicked,
//https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
var displayCard = function (){
   this.classList.toggle("open");
   this.classList.toggle("show");
   this.classList.toggle("disabled");
}
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
}

/*
 * loop through each card and create its HTML
 * add each card's HTML to the page
 */

const deck = document.querySelector(".deck");
function newGame(){
    var shuffledDeck = shuffle(cards);
    for (var i = 0; i < shuffledDeck.length; i++) {
        [].forEach.call(shuffledDeck, function(item){
            deck.appendChild(item);
        });
    }
}

/*
 *
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
