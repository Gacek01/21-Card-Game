const cardColors = ['♠','♥','♦','♣'];
const cardValues = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

class Card {
    color;
    value;
    points;

    constructor (color, value) {
        this.color = color;
        this.value = value;
        if (value === 'J' || value === 'Q' || value ==='K') this.points = 10;
        else if (value === 'A') this.points = 11
        else this.points = Number(value);
    }
}

let deck = [];
function createDeck () {
    let count = 0;
    for (let i = 0; i < cardColors.length; i++) {
        for (let j = 0; j < cardValues.length; j++) {
            deck.push(new Card(cardColors[i], cardValues[j]));
            count++;
        }
    }
    console.log('Deck Created');
}

function shuffleDeck () {
    let temp;
    let randIndex;
    for (let i = 0; i < deck.length; i++) {
        randIndex = Math.floor(Math.random()*52);
        temp = deck[i];
        deck[i] = deck[randIndex];
        deck[randIndex] = temp;
    }
}

// Program Start
createDeck ();
shuffleDeck();
