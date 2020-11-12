/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        this.missed = 0
        this.phrases = this.createPhrases()
        this.activePhrase = null
    }

    /**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/
createPhrases() {
    const phraseArray = [
        {phrase: "Life is like a box of chocolates"},
        {phrase: "How you doing"},
        {phrase: "Joey doesnt share food"},
        {phrase: "Be excellent to each other"},
        {phrase: "Party on dudes"}
    ]
    return phraseArray
};

/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
getRandomPhrase() {
    const phrases = this.phrases
    const randomNumber = Math.floor(Math.random() * phrases.length)
    return phrases[randomNumber].phrase
};

/**
* Begins game by selecting a random phrase and displaying it to user
*/
startGame() {
    const overlay = document.querySelector('#overlay')
    overlay.style.display = 'none'
    this.activePhrase = new Phrase(this.getRandomPhrase())
    this.activePhrase.addPhraseToDisplay()
    console.log('Active phrase: ', this.activePhrase)
    console.log(typeof this.activePhrase)
} 

/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
checkForWin() {
    const phraseContainer = document.querySelector('#phrase ul li')
    let hiddenLetters = 0
    phraseContainer.forEach(phraseLetter => {
        if(phraseLetter.className.includes('hide')) {
            hiddenLetters += 1
        }
    })
    // If the number of hidden letters is Zero, that means all spaces are revieled.  
    hiddenLetters == 0 ? true : false
};

/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
removeLife() {
    const scoreBoard = document.querySelectorAll('#scoreboard img')
    this.missed += 1
    if(this.missed < 5) {
        this.scoreBoard[5 - this.missed].src = 'images/lostHeart.png'
    } else if(this.missed > 5) {
        this.gameOver()
    }
};

/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
gameOver(gameWon) {
    const overlay = document.querySelector('#overlay')
    const gameOverMessage = document.querySelector('#game-over-message')
    overlay.style.display = 'block'
    if(this.missed < 5 && this.checkForWin()) {
        gameOverMessage.innerText = 'Good Job! You WON!'
    } else if(this.missed > 5) {
        gameOverMessage.innerText = "I'm sorry!  You lost!"
    }
};
}