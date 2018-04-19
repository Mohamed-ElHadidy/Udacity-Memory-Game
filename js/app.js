/*
 * Create a list that holds all of your cards
 */
const icons = ["fa fa-anchor", "fa fa-bolt", "fa fa-bomb", "fa fa-bicycle",
    "fa fa-cube", "fa fa-diamond", "fa fa-leaf", "fa fa-paper-plane-o",
    "fa fa-anchor", "fa fa-bolt", "fa fa-bomb", "fa fa-bicycle",
    "fa fa-cube", "fa fa-diamond", "fa fa-leaf", "fa fa-paper-plane-o",
];

/////////////////////////////
//// Global Variables ////
//////////////////////////

const cardsBoard = document.querySelector('#cards-board');


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

////////////////////////////////////////////////////////////////////////
// Shuffle function from http://stackoverflow.com/a/2450976//
/////////////////////////////////////////////////////////////////////

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//////////////////////////////////////////////////////////////////

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

////////////////

creatCardsBoard();

///////////////

///////////////////////////////////////////////////////////////
/////// Deck Creation and adding EventListener ////////
////////////////////////////////////////////////////////////

function creatCardsBoard() {

    // To clear the old card board 
    cardsBoard.innerHTML = "";
    // creat new ul element to append it to "cardsBoard"
    const myNewDeck = document.createElement('ul');
    myNewDeck.classList.add('deck');
    // shuffle the icons list
    let shufIcons = shuffle(icons);
    for (let i = 0; i < shufIcons.length; i++) {
        const newLi = document.createElement('li');
        newLi.classList.add('card');
        newLi.innerHTML = `<i class="${shufIcons[i]}"></i>`;
        myNewDeck.appendChild(newLi);
    }
    cardsBoard.append(myNewDeck);
    // add event listener to the cards board
    cardsBoard.addEventListener('click', respondToTheClick);
}

///////////////////////////
//// Opening Cards /// 
////////////////////////

function respondToTheClick(e) {

    let selectedCard = e.target;

    selectedCard.classList.add("open", "show");

}