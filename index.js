const cardColors = ['♠','♥','♦','♣'];
const cardValues = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
let playersHand = [], dealersHand = [], deck = [];
let playersHandValue = 0, dealersHandValue = 0;
const playerArea = document.getElementById('playerArea');
const dealerArea = document.getElementById('dealerArea');
const handValue = document.getElementById('handvalue');
let playersTurn = true;

class Card {
    color;
    value;
    points;

    constructor (color, value) {
        this.color = color;
        this.value = value;
        if (value === 'J') this.points = 2;
        else if (value === 'Q') this.points = 3;
        else if (value ==='K') this.points = 4;
        else if (value === 'A') this.points = 11
        else this.points = Number(value);
    }
}

function createDeck () {
    let count = 0;
    for (let i = 0; i < cardColors.length; i++) {
        for (let j = 0; j < cardValues.length; j++) {
            deck.push(new Card(cardColors[i], cardValues[j]));
            count++;
        }
    }
    console.log('New Deck Created');
}

function shuffleDeck () {
    let temp, randIndex;
    for (let i = 0; i < deck.length; i++) {
        randIndex = Math.floor(Math.random()*52);
        temp = deck[i];
        deck[i] = deck[randIndex];
        deck[randIndex] = temp;
    }
    console.log('Deck Shuffled');
}

function playCard() {
    const cardToPlay = deck.pop();
    const newCardDiv = document.createElement('div');
    newCardDiv.classList.add('card');
    if (playersTurn) {
        newCardDiv.style.borderColor = (cardToPlay.color === '♥' || cardToPlay.color === '♦') ? "red" : "black";
        newCardDiv.style.color = (cardToPlay.color === '♥' || cardToPlay.color === '♦') ? "red" : "black";
        newCardDiv.innerHTML = `${cardToPlay.value}<br>${cardToPlay.color}`;
        console.log(`Player drew card ${cardToPlay.value}${cardToPlay.color}`);
        playersHand.push(cardToPlay);
        playerArea.appendChild(newCardDiv);
    }
    else {
        newCardDiv.style.backgroundColor = "dodgerblue";
        console.log(`Dealer drew a card`);
        dealersHand.push(cardToPlay);
        dealerArea.appendChild(newCardDiv);
    }
}

function calcHandValue(hand) {
    let handValue = 0;
    hand.forEach(element => {
        handValue += element.points;
    });
    return handValue;
}

function updateHandValue() {
    handValue.innerHTML = `<h2>Hand Value: <big>${calcHandValue(playersHand)}</big></h2>`;
}

// Program Start
createDeck();
shuffleDeck();
playCard();
playersTurn = false;
playCard();
updateHandValue();