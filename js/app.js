// cards array to hold all cards using rest parameter
//let card = document.getElementsByClassName("card");
let card = document.getElementsByClassName("card");
let cards = [...card];

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


/*
 * Display the cards on the page
 * shuffle the list of cards using the provided "shuffle" method below
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

document.body.onload = startGame();

/*
* loop through each card and create its HTML
* add each card's HTML to the page
*/
function startGame(){
    const deck = document.querySelector(".deck");
    var shuffledCards = shuffle(cards);
    for (var i = 0; i < shuffledCards.length; i ++){
        [].forEach.call(shuffledCards, function(item){
            deck.appendChild(item);
        });
        cards[i].classList.remove("show", "open", "match", "disabled");
    }


//moves counter start: begin moves at 0
    moves=0;
    counter.innerHTML = moves;
    //rating
    for (var i = 0; i< stars.length; i++){
        stars[i].style.color = "#FFD700";
        stars[i].style.visibility = "visible";
    }
    //timer at 0
    second =0;
    minute = 0;
    hour = 0;
    var timer = document.querySelector('.timer');
    timer.innerHTML = "0 mins 0 secs";
    //clearInterval(interval);
}
/*
If a card is clicked:
* display the card's symbol (put this functionality in another function that you call from this one)
* add event listener click on the cards, display card on click
*/
// add display card function to be initialized when card is clicked,
//https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
var displayCard = function (){
   this.classList.toggle("open");
   this.classList.toggle("show");
   this.classList.toggle("disabled");
};

//add cards to openedCards array and check if cards are a match
function cardOpen() {
    openedCards.push(this);
    var len = openedCards.length;
    if(len === 2){
        moveCounter();
        if(openedCards[0].type === openedCards[1].type){
            matched();
        } else {
            unmatched();
        }
    }
};



//if the cards match
function matched(){
    openedCards[0].classList.add("match");
    openedCards[1].classList.add("match");
    openedCards[0].classList.remove("show", "open");
    openedCards[1].classList.remove("show", "open");
    openedCards = [];
}

//if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
//if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
function unmatched(){
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function(){
        openedCards[0].classList.remove("show", "open", "unmatched");
        openedCards[1].classList.remove("show", "open", "unmatched");
        enable();
        openedCards = [];
    },1000);
}

function disable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.add('disabled');
    });
}

function enable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.remove('disabled');
        for(var i=0; i< matchedCard.length, i++;
            matchedCard[i].classList.add('disabled')
        );
    });
}

//increment the move counter and display it on the page (put this functionality in another function that you call from this one)
function moveCounter(){
    moves++;
    counter.innerHTML = moves;
    if (moves == 1){
        second = 0;
        minute = 0;
        hour = 0;
        startTimer();
    }


var second = 0, minute = 0;
var timer = document.querySelector(".timer");
function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+"mins "+second+"secs";
        second++;
        if(second == 60){
            minute++;
            second = 0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}


//setting star score with moveCounter
    if (moves > 12 && moves < 20){
        for (i=0; i<3; i++){
            if (i > 1){
                stars[i].style.visibility = "collapse";
            }
        }
    }
    else if (moves > 20){
        for (i=0; i<3; i++){
            if (i > 0){
                stars[i].style.visibility = "collapse";
            }
        }
    }
}




//add event listener to each card
for (var i = 0; i < cards.length; i++){
    card = cards[i];
    card.addEventListener("click", displayCard);
    card.addEventListener("click", cardOpen);
    //card.addEventListener("click",congratulations);
};

/*
 *if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
//playagain
function playAgain(){
    modal.classList.remove("show");
    startGame();
}

