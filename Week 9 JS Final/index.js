



class Card {
    constructor(name, value, house) {
        this.name = name;
        this.value = value;
        this.house = house;
    }

    describe () {
        return `This is a ${this.name} card, it's value is: ${this.value}`;
    }

}



class Deck { // the Deck class
    constructor(name) { //contains a name constructor
        this.name = name;
        this.Cards = []; //is a list of cards, an array
    }

    addCard(card) { //adds the item of card to the deck once created
        if (card instanceof Card) { //checks to make sure the card is an instance of the Card item
            this.Cards.push(card)
        } else { //if not it throws a new error
            throw new Error(`You can only add an instance of Card. Argument is not a card: ${card}`);
        }
    }

    

}

class Player { //player class
    constructor(name, playerDeck) { //constructor of a playerDeck and a 
        this.name = name;
        this.playerDeck = [];
    }
}

class Game {
    constructor(player1, player2, deck) {
        this.player1 = player1;
        this.player2 = player2;
        this.deck = deck;

    }
    
    addCards() {    
        let houses = ["of Spades", "of Hearts", "of Diamonds", "of Clubs"];
        let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
        let names = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"];
        
        for (let house of houses) { // creates cards and populates mainDeck
            for (let i = 0; i < names.length; i++) {
                let name = names[i] + " " + house;
                let value = values[i];
                let card = new Card(name, value, house);
                this.deck.addCard(card);
            }
        }
            
        for (let i = this.deck.Cards.length - 1; i > 0; i--) { //randomizes / shuffles mainDeck i
            const random = Math.floor(Math.random() * (i + 1));
            [this.deck.Cards[i], this.deck.Cards[random]] = [this.deck.Cards[random], this.deck.Cards[i]];
        }


    

    }


    describe(deck) { //describes main deck
        this.deck = deck;
        console.log(this.deck);
    }




    dealCards(deck1, deck2) {
        this.deck1 = deck1;
        this.deck2 = deck2;

        for (let i = 0; i < 26; i++) {
            player1Deck.Cards.push(mainDeck.Cards[i]);
        }
        for (let i = 26; i < 52; i++) {
            player2Deck.Cards.push(mainDeck.Cards[i]);
        }
    }



    drawAndCompare(deck1, deck2) {
        this.deck1 = deck1;
        this.deck2 = deck2;

        console.log("We will now Begin the game!")

        let p1Score = 0;
        let p2Score = 0;

        for (let i = 0; i < 26; i++) {
            console.log(`Round: ${i + 1}`);
            let drawnCard1 = deck1.Cards[i].value;
            let drawnCard2 = deck2.Cards[i].value;
            console.log(`Flip your cards~!
                
                ${drawnCard1}          vs           ${drawnCard2}
                
                `);

            if (drawnCard1 > drawnCard2) {
                p1Score++;
                console.log("Player 1 scores! Current scores are as follows | Player 1: " + p1Score + " | Player 2: " + p2Score);
            } else if (drawnCard2 > drawnCard1) {
                p2Score++;
                console.log("Player 2 scores! Current scores are as follows | Player 1: " + p1Score + " | Player 2: " + p2Score);
            } else if (drawnCard1 == drawnCard2) {
                console.log("This round is a Draw! Nobody Scores! Current scores are as follows | Player 1: " + p1Score + " | Player 2: " + p2Score);
            } 

        }

        if (p1Score > p2Score) {
           console.log(`Player 1 is Truly Victorious with a Grand and Total Conquest! 
            
            The scores were: 
            
            ${player1.name} : ${p1Score}
            
            ${player2.name} : ${p2Score}
            
            Thank you so much for playing!`);
        } else if (p2Score > p1Score) {
            console.log(`Player 2 is the Ultimate Champion with a Marvelous and Riveting Victory! 
            
                The scores were: 
                
                ${player1.name} : ${p1Score}
                
                ${player2.name} : ${p2Score}
                
                Thank you so much for playing!`);
        } else {
            console.log(`This game is a Draw! 
            
                The scores were: 
                
                ${player1.name} : ${p1Score}
                
                ${player2.name} : ${p2Score}
                
                Thank you so much for playing!`);
        } 
    }    


}
let mainDeck = new Deck("Main Deck");
let player1Deck = new Deck("Player One Deck");
let player2Deck = new Deck("Player Two Deck");
let player1 = new Player("Alice", );
let player2 = new Player("Jorge", )
let game = new Game(player1, player2, mainDeck);

game.addCards();


game.describe(mainDeck)

game.dealCards(player1Deck, player2Deck)

game.describe(player1Deck);
game.describe(player2Deck);

game.drawAndCompare(player1Deck, player2Deck);

